const SummaryPage = require('./summary');

module.exports = {
    path: '/enquiry',
    properties: {
        fields: ['enter-enquiry-body'],
        next: SummaryPage.path
    }
};
