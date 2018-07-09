const config = require('../../../config');

const EnquirySupportEmail = require('../behaviours/enquiry-support-email');

const UserConfirmationEmail = require('../behaviours/user-confirmation-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templateId
});

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), EnquirySupportEmail, UserConfirmationEmail],
        next: ConfirmationPage.path,
        sections: {
            'enquiry-details': [
                'submitted-application',
                'decision-made',
                'pre-submission-help-choices',
                'enter-unique-reference-number'
            ],
            'contact-details': [
                'enter-email',
                'enter-phone-number',
                'contact-method-preference'
            ],
            'enquiry-body': [
                'enter-enquiry-body'
            ]
        }
    }
};
