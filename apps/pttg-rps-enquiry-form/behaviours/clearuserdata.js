'use strict';

let nonCachingInputs = [
  'question-body',
  'organisation-name',
  'your-email-address',
  'applicant-email-address',
  'your-name',
  'applicant-full-name',
  'application-number',
  'phone-number'
];
module.exports = (superclass) => class extends superclass {

  getValues(req, res, next) {
    for(let inputs of nonCachingInputs) {
      req.sessionModel.unset(inputs);
    }
    super.getValues(req, res, next);
  }
};
