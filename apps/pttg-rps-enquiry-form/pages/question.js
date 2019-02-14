const SummaryPage = require('./summary');

module.exports = {
    path: '/question',
    properties: {
        behaviours: [require('../behaviours/clearuserdata')],
        fields: [
            'question-body',
            'your-name',
            'your-email-address',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
