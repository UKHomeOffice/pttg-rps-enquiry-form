const SummaryPage = require('./summary');

module.exports = {
    path: '/org-question',
    properties: {
        fields: ['enter-question-body', 'enter-unique-reference-number', 'enter-contact-information', 'enter-email-address', 'enter-phone-number', 'enter-nationality', 'enter-supporting-organisation'],
        next: SummaryPage.path
    }
};
