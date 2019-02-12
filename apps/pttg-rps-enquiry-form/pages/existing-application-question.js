const SummaryPage = require('./summary');

module.exports = {
    path: '/question-about-existing-application',
    properties: {
      behaviours: [ require('../behaviours/clearuserdata')],
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
