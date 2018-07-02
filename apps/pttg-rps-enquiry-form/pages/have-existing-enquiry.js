const { noSelected } = require('./utils');
const HaveSubmittedApplication = require('./have-submitted-application');

module.exports = {
    path: '/have-existing-enquiry',
    properties: {
        fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
        next: '/enquiry',
        forks: [{
            target: HaveSubmittedApplication.path,
            condition: noSelected('do-you-have-existing-enquiry')
        }]
    }
};
