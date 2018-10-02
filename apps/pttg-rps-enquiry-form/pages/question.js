const SummaryPage = require('./summary');
const utils = require('./utils');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'question-body',
            'your-name',
            'your-email-address',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
