const SummaryPage = require('./summary');

module.exports = {
    path: '/enquiry',
    properties: {
        fields: ['enter-enquiry-body', 'enter-unique-reference-number', 'enter-contact-information', 'enter-email-address', 'enter-phone-number'],
        next: SummaryPage.path
    }
};
