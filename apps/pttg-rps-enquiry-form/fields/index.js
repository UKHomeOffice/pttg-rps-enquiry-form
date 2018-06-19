'use strict';

module.exports = {
  'has-existing-enquiry': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'started-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  }
};
