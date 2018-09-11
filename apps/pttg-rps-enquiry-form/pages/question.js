const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'is-proxy',
            'enter-question-body',
            'enter-unique-reference-number',
            'enter-name',
            'enter-email-address',
            'enter-phone-number',
            'enter-nationality',
            'enter-date-of-birth'
        ],
        next: SummaryPage.path
    }
};
