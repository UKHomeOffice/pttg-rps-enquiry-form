const config = require('../../../config');

const QuestionSupportEmail = require('../behaviours/question-support-email')({
    apiKey: config.notify.apiKey,
    templateId: config.notify.templates.enquirySupport,
    recipient: config.notify.recipient
});

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), QuestionSupportEmail],
        next: ConfirmationPage.path,
        sections: {
            'customer-details': [
                'your-name',
                'organisation-name'
            ],
            'application-details': [
                'applicant-full-name',
                'application-number',
                'nationality',
                'date-of-birth'
            ],
            'contact-information': [
                'your-email-address',
                'applicant-email-address',
                'phone-number'
            ],
            'question-body': [
                'question-body'
            ]
        }
    }
};
