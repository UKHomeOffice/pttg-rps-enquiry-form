const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question-about-application',
    properties: {
        fields: [
            'question-body-supporting-org-existing-app',
            'applicant-email-address-supporting-org',
            'applicant-full-name-supporting-org',
            'application-number-supporting-org'
        ],
        next: SummaryPage.path
    }
};
