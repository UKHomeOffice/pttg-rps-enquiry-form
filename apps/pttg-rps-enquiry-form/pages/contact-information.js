const { yesSelected, noSelected } = require('./utils');
const ContactMethodPreference = require('./contact-method-preference');
const UniqueReferenceNumberPage = require('./unique-reference-number');
const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/contact-information',
    properties: {
        fields: ['enter-email', 'enter-phone-number'],
        forks: [{
            target: ContactMethodPreference.path,
            condition: req => !!req.sessionModel.get('enter-phone-number')
        }, {
            target: UniqueReferenceNumberPage.path,
            condition: req => {
                return yesSelected('submitted-application')(req) && (!req.sessionModel.get('enter-phone-number'));
            }
        }, {
            target: EnquiryPage.path,
            condition: req => {
                return noSelected('submitted-application')(req) && (!req.sessionModel.get('enter-phone-number'));
            }
        }]
    }
};
