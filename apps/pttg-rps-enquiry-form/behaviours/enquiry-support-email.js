const Emailer = require('hof-behaviour-emailer');
const config = require('../../../config');
const path = require('path');


const parse = (model, translate) => {
    const getLabel = key => {
        const labelKey = `emails.enquiry.${key}.label`;
        return translate(labelKey);
    };

    const getHeader = key => {
        const headerKey = `emails.enquiry.${key}.header`;
        return translate(headerKey);
    };

    return {
        'headers': {
            'contact-information-header': getHeader('contact-information'),
            'enquiry-information-header': getHeader('enquiry-information'),
            'enquiry-header': getHeader('enquiry')
        },
        'contact-information': [
            { label: getLabel('fullname'), value: model['enter-fullname'] },
            { label: getLabel('email'), value: model['enter-email'] },
            { label: getLabel('phone-number'), value: model['enter-phone-number'] }
        ],
        'enquiry-information': [
            { label: getLabel('submitted-application'), value: model['submitted-application'] },
            { label: getLabel('unique-reference-number'), value: model['enter-unique-reference-number'] }
        ],
        'enquiry': model['enter-enquiry-body']
    };
};

module.exports = Emailer({
    ...config.email,
    template: path.resolve(__dirname, '../views/emails/enquiry-support-email.html'),
    recipient: 'support-enquiry@homeoffice.gov.uk',
    subject: (model, translate) => translate('emails.enquiry.subject'),
    parse
});
