const EnquirySupportEmail = require('../behaviours/enquiry-support-email');
const UserConfirmationEmail = require('../behaviours/user-confirmation-email');

const ConfirmationPage = require('./confirmation');

module.exports = {
    path: '/confirm',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), EnquirySupportEmail, UserConfirmationEmail],
        next: ConfirmationPage.path,
        sections: {
            'enquiry-details': [
                'do-you-have-existing-enquiry',
                'enter-contact-reference-number',
                'submitted-application',
                'liveapp-or-decision',
                'pre-submission-help-choices',
                'enter-unique-reference-number'
            ],
            'contact-details': [
                'enter-fullname',
                'enter-date-of-birth',
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
