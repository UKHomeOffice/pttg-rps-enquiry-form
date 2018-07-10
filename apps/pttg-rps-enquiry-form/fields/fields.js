module.exports = {
    'submitted-application': {
        mixin: 'radio-group',
        options: ['yes', 'no'],
        validate: 'required'
    },
    'decision-made': {
        mixin: 'radio-group',
        options: ['yes', 'no'],
        validate: 'required'
    },
    'pre-submission-help-choices': {
        mixin: 'radio-group',
        options: ['how-to-apply', 'eligibility-factsheet'],
        validate: 'required'
    },
    'enter-email': {
        mixin: 'input-text',
        validate: ['required', 'email']
    },
    'enter-phone-number': {
        mixin: 'input-phone',
        validate: ['phonenumber']
    },
    'contact-method-preference': {
        mixin: 'radio-group',
        options: ['email', 'phone-number'],
        validate: 'required'
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
