const { isSelected } = require('./utils');
const SupportingDocumentsFactsheet = require('./factsheets/eligibility-factsheet');
const HowToApplyFactsheet = require('./factsheets/how-to-apply-factsheet');
const DecisionFactsheet = require('./factsheets/decision-factsheet');
const LiveApplicationFactsheet = require('./factsheets/live-application-factsheet');
const OrganisationQuestionForm = require('./org-question');
const QuestionForm = require('./question');

module.exports = {
    path: '/what-is-your-question',
    properties: {
        fields: ['your-question-option'],
        forks: [{
            target: SupportingDocumentsFactsheet.path,
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
            target: OrganisationQuestionForm.path,
            condition: isSelected('supporting-organisation', 'your-question-option')
        },
        {
            target: QuestionForm.path,
            condition: isSelected('question-form', 'your-question-option')
        }]
    }
};
