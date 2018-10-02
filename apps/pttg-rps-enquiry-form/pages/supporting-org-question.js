const SummaryPage = require('./summary');
const utils = require('./utils');

module.exports = {
    path: '/supporting-org-question',
    properties: {
        fields: [
            'question-body',
            'applicant-email-address',
            'applicant-full-name',
            'application-number'
        ],
        forks: [{
            target: '/application-details',
            condition: utils.isSelected('yes', 'existing-application')
        }],
        next: SummaryPage.path
    }
};
