const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient('');

const getValue = (value, field, translate) => {

    const key = `fields.${field}.options.${value}.label`;
    let result = translate(key);

    if (result === key) {

        result = value;

    }

    return result;

};

module.exports = superclass => class Rename extends superclass {


    successHandler(req, res, callback) {
        const translate = req.translate;
        const contactPreference = getValue(req.sessionModel.get('contact-method-preference'), 'contact-method-preference', translate);
        const submittedApplication = getValue(req.sessionModel.get('submitted-application'), 'submitted-application', translate);
        notifyClient
            .sendEmail('', req.sessionModel.get('enter-email'), {
                personalisation: {
                    'email_address': req.sessionModel.get('enter-email'),
                    'phone_number': req.sessionModel.get('enter-phone-number'),
                    'contact_preference': contactPreference,
                    'have_submitted_application': submittedApplication,
                    'unique_reference_number': req.sessionModel.get('enter-unique-reference-number'),
                    'enquiry': req.sessionModel.get('enter-enquiry-body')

                }

            })
            .then(response => {

                const statusCode = response.statusCode;
                if (statusCode === 201) {
                    console.log(response);
                } else {
                    console.log(`Email failed to send with status code ${statusCode}`);
                }

            })
            .catch(err => {
                
                console.log(err);
                const body = err.body;
                const statusCode = body['status_code'];
                console.error(`${body} failed with status code: ${statusCode}`);

            })
    }
};
