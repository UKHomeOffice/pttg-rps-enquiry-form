const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        fields: [
            'question-body',
            'organisation-name',
            'your-name',
            'your-email-address',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
