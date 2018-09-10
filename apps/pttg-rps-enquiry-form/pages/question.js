const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'enter-name',
            'enter-question-body',
            'enter-unique-reference-number',
            'enter-email-address',
            'enter-phone-number',
            'enter-nationality',
            'enter-date-of-birth'
        ],
        next: SummaryPage.path
    }
};
