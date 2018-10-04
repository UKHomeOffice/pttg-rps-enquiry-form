const NextOrganisationPage = require('./supporting-org-application-question-2');

module.exports = {
    path: '/about-your-organisation',
    properties: {
        fields: [
            'your-name',
            'phone-number',
            'organisation-name'
        ],
        next: NextOrganisationPage.path
    }
};
