const dateComponent = require('hof-component-date');

module.exports = {
    'your-question-option': {
        mixin: 'radio-group',
        options: ['eligibility', 'how-to-apply', 'change-or-withdraw', 'application-result', 'supporting-organisation'],
        validate: 'required'
    },
    'your-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'your-email-address-supporting-org': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'applicant-email-address': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'applicant-email-address-supporting-org': {
        mixin: 'input-text',
        validate: ['required', 'email', {
            type: 'maxlength',
            arguments: '254'
        }]
    },
    'nationality': {
        mixin: 'select',
        options: [{label: ' ', value: ''}].concat(require('hof-util-countries')())
    },
    'phone-number': {
        formatter: 'removespaces',
        mixin: 'input-phone',
        validate: 'phonenumber'
    },
    'phone-number-supporting-org': {
        formatter: 'removespaces',
        mixin: 'input-phone',
        validate: 'phonenumber'
    },
    'phone-number-supporting-org-existing-app': {
        formatter: 'removespaces',
        mixin: 'input-phone',
        validate: 'phonenumber'
    },
    'phone-number-existing-app': {
        formatter: 'removespaces',
        mixin: 'input-phone',
        validate: 'phonenumber'
    },
    'application-number': {
        mixin: 'input-text',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: '25'
            }
        ],
        child: '{{#t}}fields.application-number.example{{/t}}'
    },
    'application-number-supporting-org': {
        mixin: 'input-text',
        validate: [
            'required',
            {
                type: 'maxlength',
                arguments: '25'
            }
        ],
        child: '{{#t}}fields.application-number.example{{/t}}'
    },
    'question-body': {
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
    'question-body-existing-app': {
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
    'question-body-supporting-org': {
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
    'question-body-supporting-org-existing-app': {
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
    'your-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'your-name-supporting-org': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'your-name-supporting-org-existing-app': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'organisation-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'organisation-name-existing-app': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'applicant-full-name': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'applicant-full-name-supporting-org': {
        mixin: 'input-text',
        validate: ['required', {
            type: 'maxlength',
            arguments: '255'
        }]
    },
    'existing-application': {
        mixin: 'radio-group',
        className: ['inline'],
        options: ['yes', 'no'],
        validate: 'required',
        legend: {
            className: 'visually-hidden' // margin also changed in app.scss
        }
    },
};
