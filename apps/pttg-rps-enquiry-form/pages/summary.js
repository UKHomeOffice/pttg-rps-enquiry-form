const questionSupportEmail = require('../behaviours/question-support-email');
const UserConfirmationEmail = require('../behaviours/user-confirmation-email');

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
