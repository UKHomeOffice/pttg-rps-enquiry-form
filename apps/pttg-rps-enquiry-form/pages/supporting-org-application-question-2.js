const SummaryPage = require('./summary');

module.exports = {
    path: '/supporting-org-question-about-application',
    properties: {
        fields: [
            'question-body',
            'applicant-email-address',
            'applicant-full-name',
            'application-number'
        ],
        next: SummaryPage.path
    }
};
