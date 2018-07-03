const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/unique-reference-number',
    properties: {
        fields: ['enter-unique-reference-number'],
        next: EnquiryPage.path
    }
};
