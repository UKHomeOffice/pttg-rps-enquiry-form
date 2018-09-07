const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        fields: ['enter-question-body', 'enter-unique-reference-number', 'enter-email-address', 'enter-phone-number', 'enter-nationality'],
        next: SummaryPage.path
    }
};
