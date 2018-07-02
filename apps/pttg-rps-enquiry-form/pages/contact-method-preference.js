const UniqueReferenceNumberPage = require('./unique-reference-number');
const { yesSelected } = require('./utils');

module.exports = {
    path: '/contact-method-preference',
    properties: {
        fields: ['contact-method-preference'],
        next: '/enquiry',
        forks: [{
            target: UniqueReferenceNumberPage.path,
            condition: yesSelected('submitted-application')
        }]
    }
};
