const { noSelected } = require('./utils');

const HaveSubmittedApplication = require('./have-submitted-application');
const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/have-existing-enquiry',
    properties: {
        fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
        next: EnquiryPage.path,
        forks: [{
            target: HaveSubmittedApplication.path,
            condition: noSelected('do-you-have-existing-enquiry')
        }]
    }
};
