const SummaryPage = require('./summary');
const utils = require('./utils');

module.exports = {
    path: '/question',
    properties: {
        fields: [
            'question-body',
            'name',
            'email-address',
            'phone-number',
            'existing-application'
        ],
        forks: [{
            target: '/application-details',
            condition: utils.isSelected('yes', 'existing-application')
        }],
        next: SummaryPage.path
    }
};
