const config = require('../../../config');

const EnquirySupportEmail = require('../behaviours/enquiry-support-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templates.enquirySupport
});

const UserConfirmationEmail = require('../behaviours/user-confirmation-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templates.userConfirmation
});

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), questionSupportEmail, UserConfirmationEmail],
        next: ConfirmationPage.path,
        sections: {
            'question-details': [
                'enter-unique-reference-number'
            ],
            'enter-contact-information': [
                'enter-email-address',
                'enter-phone-number'
            ],
            'question-body': [
                'enter-question-body'
            ]
        }
    }
};
