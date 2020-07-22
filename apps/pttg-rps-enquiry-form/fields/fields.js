const emailTextBox = {
    mixin: 'input-text',
    validate: ['required', 'email', {
        type: 'maxlength',
        arguments: '254'
    }]
};

const phoneTextBox = {
    formatter: 'removespaces',
    mixin: 'input-phone',
    validate: 'phonenumber'
};

const applicationNumberTextBox = {
    mixin: 'input-text',
    validate: [
        'required',
        {
            type: 'maxlength',
            arguments: '25'
        }
    ],
    child: '{{#t}}fields.application-number.example{{/t}}'
};

const questionBodyTextBox = {
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
};

const sharedTextBox = {
    mixin: 'input-text',
    validate: ['required', {
        type: 'maxlength',
        arguments: '255'
    }]
};

module.exports = {
    'your-question-option': {
        mixin: 'radio-group',
        options: ['eligibility', 'how-to-apply', 'change-or-withdraw', 'application-result', 'supporting-organisation'],
        validate: 'required'
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
    'your-email-address': emailTextBox,
    'your-email-address-supporting-org': emailTextBox,
    'applicant-email-address': emailTextBox,
    'applicant-email-address-supporting-org': emailTextBox,
    'phone-number': phoneTextBox,
    'phone-number-supporting-org': phoneTextBox,
    'phone-number-supporting-org-existing-app': phoneTextBox,
    'phone-number-existing-app': phoneTextBox,
    'application-number': applicationNumberTextBox,
    'application-number-supporting-org': applicationNumberTextBox,
    'question-body': questionBodyTextBox,
    'question-body-existing-app': questionBodyTextBox,
    'question-body-supporting-org': questionBodyTextBox,
    'question-body-supporting-org-existing-app': questionBodyTextBox,
    'your-name': sharedTextBox,
    'your-name-supporting-org': sharedTextBox,
    'your-name-supporting-org-existing-app': sharedTextBox,
    'organisation-name': sharedTextBox,
    'organisation-name-existing-app': sharedTextBox,
    'applicant-full-name': sharedTextBox,
    'applicant-full-name-supporting-org': sharedTextBox
};
