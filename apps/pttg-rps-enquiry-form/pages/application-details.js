const summaryPage = require('./summary');

module.exports = {
    path: '/application-details',
    properties: {
        fields: [
            'applicant-full-name',
            'application-number',
            'nationality',
            'date-of-birth'
        ],
        next: summaryPage.path
    }
};
