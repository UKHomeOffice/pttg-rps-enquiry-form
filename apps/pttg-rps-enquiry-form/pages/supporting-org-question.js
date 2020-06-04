const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        fields: [
            'question-body-supporting-org',
            'organisation-name',
            'your-name-supporting-org',
            'your-email-address-supporting-org',
            'phone-number-supporting-org'
        ],
        next: SummaryPage.path
    }
};
