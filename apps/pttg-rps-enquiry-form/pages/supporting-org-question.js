const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        fields: [
            'question-body',
            'your-email-address',
            'your-name',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
