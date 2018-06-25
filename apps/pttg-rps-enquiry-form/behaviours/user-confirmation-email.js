'use strict';

const Emailer = require('hof-behaviour-emailer');
const config = require('../../../config');
const path = require('path');


const parse = (model, translate) => {
    const getLabel = key => {
        const labelKey = `emails.user-confirmation.${key}.label`;
        return translate(labelKey);
    };

    const getHeader = key => {
        const headerKey = `emails.user-confirmation.${key}.header`;
        return translate(headerKey);
    };

    return {
        'headers': {
            'contact-information-header': getHeader('contact-information'),
            'enquiry-information-header': getHeader('enquiry-information'),
            'enquiry-header': getHeader('enquiry')
        },
        'intro': translate('emails.user-confirmation.intro'),
        'contact-information': [
            { label: getLabel('fullname'), value: model['enter-fullname'] },
            { label: getLabel('date-of-birth'), value: model['enter-date-of-birth'] },
            { label: getLabel('email'), value: model['enter-email'] },
            { label: getLabel('phone-number'), value: model['enter-phone-number'] }
        ],
        'enquiry-information': [
            { label: getLabel('existing-enquiry'), value: model['do-you-have-existing-enquiry'] },
            { label: getLabel('contact-reference-number'), value: model['enter-contact-reference-number'] },
            { label: getLabel('submitted-application'), value: model['submitted-application'] },
            { label: getLabel('unique-reference-number'), value: model['enter-unique-reference-number'] }
        ],
        'enquiry': model['enter-enquiry-body']
    };
};

module.exports = Emailer({
    ...config.email,
    template: path.resolve(__dirname, '../views/emails/user-confirmation-email.html'),
    from: 'confirmation@homeoffice.gov.uk',
    recipient: model => model['enter-email'],
    subject: (model, translate) => translate('emails.user-confirmation.subject'),
    parse
});
