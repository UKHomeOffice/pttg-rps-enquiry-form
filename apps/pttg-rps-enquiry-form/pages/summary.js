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
                'question-body'
            ],
            'your-details': [
                'your-name',
                'organisation-name'
            ],
            'application-details': [
                'applicant-full-name',
                'application-number'
            ],
            'contact-information': [
                'your-email-address',
                'applicant-email-address',
                'phone-number'
            ]
        }
    }
};
