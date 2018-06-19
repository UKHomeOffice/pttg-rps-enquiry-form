'use strict';

module.exports = {
  'has-existing-enquiry': {
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
  'started-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'contact-reference-number': {
    mixin: 'input-text'
  },
  'liveapp-or-decision': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'decision-factsheet': {
  }

};
