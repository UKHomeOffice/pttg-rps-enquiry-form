const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'question-body',
            'unique-reference-number',
            'name',
            'email-address',
            'phone-number',
            'nationality',
            'date-of-birth'
        ],
        next: SummaryPage.path
    }
};
