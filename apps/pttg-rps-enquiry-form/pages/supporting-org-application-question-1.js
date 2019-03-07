const NextOrganisationPage = require('./supporting-org-application-question-2');

module.exports = {
    path: '/about-your-organisation',
    properties: {
        fields: [
            'organisation-name',
            'your-name',
            'phone-number'

        ],
        next: NextOrganisationPage.path
    }
};
