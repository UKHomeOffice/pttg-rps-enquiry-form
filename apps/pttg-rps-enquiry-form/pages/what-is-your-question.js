const { isSelected } = require('./utils');
const AboutSchemeFactsheet = require('./factsheets/about-the-scheme');
const HowToApplyFactsheet = require('./factsheets/how-to-apply-factsheet');
const DecisionFactsheet = require('./factsheets/decision-factsheet');
const LiveApplicationFactsheet = require('./factsheets/live-application-factsheet');
const SupportingOrgFactsheet = require('./factsheets/supporting-org-factsheet');

module.exports = {
    path: '/what-is-your-question',
    properties: {
        fields: ['your-question-option'],
        forks: [{
            target: AboutSchemeFactsheet.path,
            condition: isSelected('eligibility', 'your-question-option')
        },
        {
            target: HowToApplyFactsheet.path,
            condition: isSelected('how-to-apply', 'your-question-option')
        },
        {
            target: LiveApplicationFactsheet.path,
            condition: isSelected('change-or-withdraw', 'your-question-option')
        },
        {
            target: DecisionFactsheet.path,
            condition: isSelected('application-result', 'your-question-option')
        },
        {
            target: SupportingOrgFactsheet.path,
            condition: isSelected('supporting-organisation', 'your-question-option')
        }]
    }
};
