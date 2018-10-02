const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'question-body',
            'name',
            'email-address',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
