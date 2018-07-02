const { yesSelected } = require('./utils');
const UniqueReferenceNumberPage = require('./unique-reference-number');
const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/contact-method-preference',
    properties: {
        fields: ['contact-method-preference'],
        next: EnquiryPage.path,
        forks: [{
            target: UniqueReferenceNumberPage.path,
            condition: yesSelected('submitted-application')
        }]
    }
};
