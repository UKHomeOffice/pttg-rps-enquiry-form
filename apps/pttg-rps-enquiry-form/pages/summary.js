const config = require('../../../config');

const QuestionSupportEmail = require('../behaviours/question-support-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templates.enquirySupport,
    recipient: config.notify.recipient
});

const UserConfirmationEmail = require('../behaviours/user-confirmation-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templates.userConfirmation
});

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), QuestionSupportEmail, UserConfirmationEmail],
        next: ConfirmationPage.path,
        sections: {
            'customer-details': [
                'name',
                'organisation-name'
            ],
            'application-details': [
                'applicant-full-name',
                'unique-reference-number',
                'nationality',
                'date-of-birth'
            ],
            'contact-information': [
                'email-address',
                'phone-number'
            ],
            'question-body': [
                'question-body'
            ]
        }
    }
};
