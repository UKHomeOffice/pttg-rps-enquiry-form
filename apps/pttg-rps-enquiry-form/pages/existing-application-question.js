const SummaryPage = require('./summary');

module.exports = {
    path: '/question-about-existing-application',
    properties: {
        fields: [
            'question-body',
            'applicant-email-address',
            'applicant-full-name',
            'application-number',
            'phone-number'
        ],
        next: SummaryPage.path
    }
};
