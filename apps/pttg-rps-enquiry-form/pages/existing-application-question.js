const SummaryPage = require('./summary');

module.exports = {
    path: '/question-about-existing-application',
    properties: {
        fields: [
            'question-body-existing-app',
            'applicant-email-address',
            'applicant-full-name',
            'application-number',
            'phone-number-existing-app'
        ],
        next: SummaryPage.path
    }
};
