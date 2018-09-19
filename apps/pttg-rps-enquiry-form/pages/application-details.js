const summaryPage = require('./summary');

module.exports = {
    path: '/application-details',
    properties: {
        fields: [
            'applicant-full-name',
            'unique-reference-number',
            'phone-number',
            'nationality',
            'date-of-birth'
        ],
        next: summaryPage.path
    }
};
