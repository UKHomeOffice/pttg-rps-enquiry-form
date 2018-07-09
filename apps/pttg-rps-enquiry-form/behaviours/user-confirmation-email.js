const NotifyClient = require('notifications-node-client').NotifyClient;
const log = require('../../../logger');

const getValue = (value, field, translate) => {
    const key = `fields.${field}.options.${value}.label`;
    return translate(key);
};

module.exports = config => {
    const { apiKey, templateId } = config;

    if (!apiKey) {
        throw new Error('Missing Notify API Key');
    }

    if (!templateId) {
        throw new Error('Missing Notify Template ID');
    }

    const notifyClient = new NotifyClient(apiKey);

    return superclass => class Rename extends superclass {
        successHandler(req, res, callback) {
            const translate = req.translate;
            const contactPreference = getValue(req.sessionModel.get('contact-method-preference'), 'contact-method-preference', translate);
            const submittedApplication = getValue(req.sessionModel.get('submitted-application'), 'submitted-application', translate);

            notifyClient
                .sendEmail(templateId, req.sessionModel.get('enter-email'), {
                    personalisation: {
                        'email_address': req.sessionModel.get('enter-email') || 'N/A',
                        'phone_number': req.sessionModel.get('enter-phone-number') || 'N/A',
                        'contact_preference': contactPreference || 'N/A',
                        'have_submitted_application': submittedApplication || 'N/A',
                        'unique_reference_number': req.sessionModel.get('enter-unique-reference-number') || 'N/A',
                        'enquiry': req.sessionModel.get('enter-enquiry-body') || 'N/A'
                    }
                })
                .then(response => {
                    log.info('Success');
                    log.info(response);

                })
                .catch(err => {
                    const { statusCode, message } = err;
                    log.error(err);
                    log.error(`Got status code '${statusCode}' with message message '${message}'`);
                })
                .finally(() => {
                    super.successHandler(req, res, callback);
                });
        }
    };
};
