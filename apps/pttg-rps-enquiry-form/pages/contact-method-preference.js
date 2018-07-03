const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/contact-method-preference',
    properties: {
        fields: ['contact-method-preference'],
        next: EnquiryPage.path
    }
};
