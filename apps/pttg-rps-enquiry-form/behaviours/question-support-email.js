const Emailer = require('hof-behaviour-emailer');
const config = require('../../../config');
const path = require('path');


const parse = (model, translate) => {
    const getLabel = key => {
        const labelKey = `emails.question.${key}.label`;
        return translate(labelKey);
    };

    const getHeader = key => {
        const headerKey = `emails.question.${key}.header`;
        return translate(headerKey);
    };

    return {
        'headers': {
            'contact-information-header': getHeader('contact-information'),
            'question-information-header': getHeader('question-information'),
            'question-header': getHeader('question')
        },
        'contact-information': [
            { label: getLabel('email'), value: model['enter-email'] },
            { label: getLabel('phone-number'), value: model['enter-phone-number'] }
        ],
        'question-information': [
            { label: getLabel('submitted-application'), value: model['submitted-application'] },
            { label: getLabel('unique-reference-number'), value: model['enter-unique-reference-number'] }
        ],
        'question': model['enter-question-body']
    };
};

module.exports = Emailer({
    ...config.email,
    template: path.resolve(__dirname, '../views/emails/question-support-email.html'),
    recipient: 'support-question@homeoffice.gov.uk',
    subject: (model, translate) => translate('emails.question.subject'),
    parse
});
