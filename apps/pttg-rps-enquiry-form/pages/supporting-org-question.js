const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        behaviours: [require('../behaviours/clearuserdata')],
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
