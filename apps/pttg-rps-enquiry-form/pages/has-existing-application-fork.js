const QuestionPage = require('./question');
const ExistingApplicationQuestionPage = require('./existing-application-question');
const ExistingApplicationOrganisationPage = require('./supporting-org-application-question-1');
const SupportingOrganisationQuestionPage = require('./supporting-org-question');

const FORK_FIELD = 'existing-application';
// const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
module.exports = {
    path: '/about-existing-application',
    properties: {
        fields: [FORK_FIELD],
        forks: [
            {
                target: ExistingApplicationOrganisationPage.path,
                condition:  (req) =>
                    req.sessionModel.get(FORK_FIELD) === 'yes' &&
                    req.sessionModel.get('your-question-option') === 'supporting-organisation'
            },
            {
                target: SupportingOrganisationQuestionPage.path,
                condition:  (req) =>
                    req.sessionModel.get(FORK_FIELD) === 'no' &&
                    req.sessionModel.get('your-question-option') === 'supporting-organisation'
            },
            {
                target: QuestionPage.path,
                condition:  (req) =>
                    req.sessionModel.get(FORK_FIELD) === 'no' &&
                    req.sessionModel.get('your-question-option') !== 'supporting-organisation'
            }
        ],
        next: ExistingApplicationQuestionPage.path
    }
};
// isSelected('supporting-organisation', 'your-question-option') &&
