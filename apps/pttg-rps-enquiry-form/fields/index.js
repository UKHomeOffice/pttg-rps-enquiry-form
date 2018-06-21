'use strict';

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
  'decision-factsheet': {},
  'sufficient-advice': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'pre-submission-help-choices': {
    mixin: 'radio-group',
    options: ['how-to-apply', 'supporting-documents'],
    validate: 'required'
  }
};
