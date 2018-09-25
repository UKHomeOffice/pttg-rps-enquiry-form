const NotifyClient = require('notifications-node-client').NotifyClient;
const log = require('../../../logger');

const getValue = (value, field, translate) => {
    const key = `fields.${field}.options.${value}.label`;
    return translate(key);
};

module.exports = config => {
    const { apiKey, templateId, recipient } = config;

    if (!apiKey) {
        throw new Error('Missing Notify API Key');
    }

    if (!templateId) {
        throw new Error('Missing Notify Template ID');
    }

    const notifyClient = new NotifyClient(apiKey);

    return superclass => class extends superclass {
        async successHandler(req, res, callback) {
            const translate = req.translate;
            const contactPreference = getValue(req.sessionModel.get('contact-method-preference'), 'contact-method-preference', translate);
            const submittedApplication = getValue(req.sessionModel.get('submitted-application'), 'submitted-application', translate);

            try {
                const response = await notifyClient.sendEmail(templateId, recipient || req.sessionModel.get('email-address'), {
                    personalisation: {
                        'email_address': req.sessionModel.get('email-address') || 'N/A',
                        'phone_number': req.sessionModel.get('phone-number') || 'N/A',
                        'contact_preference': contactPreference || 'N/A',
                        'have_submitted_application': submittedApplication || 'N/A',
                        'application-number': req.sessionModel.get('application-number') || 'N/A',
                        'question': req.sessionModel.get('question-body') || 'N/A'
                    }
                });

                log.info('Support Enquiry Email sent successfully');
                log.debug(response);
            } catch (err) {
                const { statusCode, error } = err;
                const { errors } = error;

                const messages = errors.map(error => error.message).join();

                log.error(`Support Enquiry Email failed to send. Got status code '${statusCode}' with messages '${messages}'`);
            }

            super.successHandler(req, res, callback);
        }
    };
};
