const ContactMethodPreference = require('./contact-method-preference');
const EnquiryPage = require('./enquiry');

module.exports = {
    path: '/contact-information',
    properties: {
        fields: ['enter-email', 'enter-phone-number'],
        forks: [{
            target: ContactMethodPreference.path,
            condition: req => !!req.sessionModel.get('enter-phone-number')
        }, {
            target: EnquiryPage.path,
            condition: req => !req.sessionModel.get('enter-phone-number')
        }]
    }
};
