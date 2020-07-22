const NextOrganisationPage = require('./supporting-org-application-question-2');

module.exports = {
    path: '/about-your-organisation',
    properties: {
        fields: [
            'organisation-name-existing-app',
            'your-name-supporting-org-existing-app',
            'phone-number-supporting-org-existing-app'

        ],
        next: NextOrganisationPage.path
    }
};
