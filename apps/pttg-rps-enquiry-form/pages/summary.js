const config = require('../../../config');

const QuestionSupportEmail = require('../behaviours/notify')({
    apiKey: config.notify.apiKey,
    recipient: config.notify.recipient,
    templates: config.notify.templates
});

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        template: 'summary',
        behaviours: ['complete', require('hof-behaviour-summary-page'), QuestionSupportEmail],
        next: ConfirmationPage.path,
        sections: {
            'your-question': [
                'question-body',
                'question-body-existing-app',
                'question-body-supporting-org',
                'question-body-supporting-org-existing-app'
            ],
            'your-details': [
                'your-name',
                'your-name-supporting-org',
                'your-name-supporting-org-existing-app',
                'organisation-name',
                'organisation-name-existing-app'
            ],
            'application-details': [
                'applicant-full-name',
                'applicant-full-name-supporting-org',
                'application-number',
                'application-number-supporting-org'
            ],
            'contact-information': [
                'your-email-address',
                'your-email-address-supporting-org',
                'applicant-email-address',
                'applicant-email-address-supporting-org',
                'phone-number',
                'phone-number-existing-app',
                'phone-number-supporting-org',
                'phone-number-supporting-org-existing-app'
            ]
        }
    }
};
