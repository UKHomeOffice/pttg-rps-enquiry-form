module.exports = {
    'do-you-have-existing-enquiry': {
        mixin: 'radio-group',
        options: [{
            value: 'yes',
            toggle: 'have-existing-enquiry-toggle-content',
            child: 'partials/enter-contact-reference-number'
        }, {
            value: 'no'
        }],
        validate: 'required'
    },
    'submitted-application': {
        mixin: 'radio-group',
        options: ['yes', 'no'],
        validate: 'required'
    },
    'enter-contact-reference-number': {
        mixin: 'input-text',
        validate: 'required',
        dependent: {
            field: 'do-you-have-existing-enquiry',
            value: 'yes'
        }
    },
    'liveapp-or-decision': {
        mixin: 'radio-group',
        options: ['yes', 'no'],
        validate: 'required'
    },
    'pre-submission-help-choices': {
        mixin: 'radio-group',
        options: ['how-to-apply', 'supporting-documents'],
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
        validate: 'required'
    },
    'enter-enquiry-body': {
        mixin: 'textarea',
        validate: 'required',
        attributes: [{
            attribute: 'rows',
            value: 8
        }]
    }
};
