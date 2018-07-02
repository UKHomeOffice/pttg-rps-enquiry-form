const EnquirySupportEmail = require('../behaviours/enquiry-support-email');
const UserConfirmationEmail = require('../behaviours/user-confirmation-email');

module.exports = {
    path: '/summary',
    properties: {
        behaviours: ['complete', require('hof-behaviour-summary-page'), EnquirySupportEmail, UserConfirmationEmail],
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
        },
        next: '/confirmation'

    }
};
