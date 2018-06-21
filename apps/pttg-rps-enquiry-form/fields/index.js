'use strict';

const dateComponent = require('hof-component-date');

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
    mixin: 'input-text'
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
  },
  'enter-fullname': {
    mixin: 'input-text',
    validate: 'required'
  },
  'enter-date-of-birth': dateComponent('enter-date-of-birth', {
    mixin: 'input-date',
    validate: ['required', 'before', { type: 'after', arguments: '1900-01-01' }]
  }),
  'enter-email': {
    mixin: 'input-text',
    validate: ['required', 'email']
  },
  'enter-phone-number': {
    mixin: 'input-phone',
    validate: 'required'
  },
  'enter-unique-reference-number': {
    mixin: 'input-text',
    validate: 'required'
  }
};
