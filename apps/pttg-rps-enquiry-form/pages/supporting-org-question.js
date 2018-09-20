const SummaryPage = require('./summary');
const utils = require('./utils');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        fields: [
            'question-body',
            'name',
            'email-address',
            'phone-number',
            'organisation-name',
            'existing-application'
        ],
        forks: [{
            target: '/application-details',
            condition: utils.isSelected('yes', 'existing-application')
        }],
        next: SummaryPage.path
    }
};
