const { isSelected } = require('./utils');

const ExistingApplicationQuestion = require('./existing-application-question');
const Question = require('./question');

const FORK_FIELD = 'existing-application';

module.exports = {
    path: '/about-existing-application',
    properties: {
        fields: [FORK_FIELD],
        forks: [
            {
                target: Question.path,
                condition: isSelected('no', FORK_FIELD)
            }
        ],
        next: ExistingApplicationQuestion.path
    }
};
