const SummaryPage = require('./summary');
const HasSubmittedApplicationToLocalBehaviour = require('../behaviours/has-submitted-application-local');

module.exports = {
    path: '/enquiry',
    properties: {
        fields: ['enter-enquiry-body', 'enter-unique-reference-number'],
        behaviours: [HasSubmittedApplicationToLocalBehaviour],
        next: SummaryPage.path
    }
};
