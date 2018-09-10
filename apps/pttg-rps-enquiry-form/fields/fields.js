const dateComponent = require('hof-component-date');

module.exports = {
    'your-question-option': {
        mixin: 'radio-group',
        options: ['eligibility', 'how-to-apply', 'change-or-withdraw', 'application-result', 'question-form'],
        validate: 'required'
    },
    'enter-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'enter-nationality': {
        mixin: 'select',
        options: [{label:' ', value: '(not stated)'}].concat(require('hof-util-countries')())
    },
    'enter-phone-number': {
        mixin: 'input-phone',
        validate: ['phonenumber']
    },
    'enter-unique-reference-number': {
        mixin: 'input-text',
        validate: [{
            type: 'maxlength',
            arguments: '25'

        }]
    },
    'enter-question-body': {
        mixin: 'textarea',
        validate: [
            'required', {
                type: 'maxlength',
                arguments: '2000'
            }
        ],
        attributes: [{
            attribute: 'rows',
            value: 8
        }]
    },
    'enter-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'enter-date-of-birth': dateComponent('enter-date-of-birth', {
        validate: [
            {type: 'before'},
            {type: 'after', arguments: '1903-01-01'}
        ]
    })

};
