module.exports = {
    'your-enquiry-option': {
        mixin: 'radio-group',
        options: ['eligibility', 'how-to-apply', 'change-or-withdraw', 'application-result', 'enquiry-form'],
        validate: 'required'
    },
    'enter-contact-information': {
        mixin: 'radio-group',
        options: [{
            value: 'enter-email-address',
            toggle: 'enter-email-address-content',
            child: 'partials/enter-email-address'
        }, {
            value: 'enter-phone-number',
            toggle: 'enter-phone-content',
            child: 'partials/enter-phone-number'
        }],
        validate: 'required'
    },
    'enter-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
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
    'enter-enquiry-body': {
        mixin: 'textarea',
        validate: [
            'required', {
                type: 'maxlength',
                arguments: '500'
            }
        ],
        attributes: [{
            attribute: 'rows',
            value: 8
        }]
    }
};
