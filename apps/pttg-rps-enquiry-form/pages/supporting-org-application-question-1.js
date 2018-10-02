const { isSelected } = require('./utils');
const OrganisationQuestionPage = require('./supporting-org-question');
const OrganisationApplicationQuestionPage = require('./supporting-org-application-question');

module.exports = {
    path: '/about-your-organisation',
    properties: {
        fields: [
            'your-name',
            'phone-number',
            'organisation-name'
        ],
        forks: [
            {
                condition: isSelected('yes', 'existing-application'),
                location: OrganisationApplicationQuestionPage.path
            }
        ],
        next: OrganisationQuestionPage.path
    }
};
