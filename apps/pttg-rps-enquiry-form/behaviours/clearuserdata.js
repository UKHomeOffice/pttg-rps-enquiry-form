'use strict';

module.exports = (superclass) => class extends superclass {

  getValues(req, res, next) {
    req.sessionModel.unset('question-body');
    req.sessionModel.unset('applicant-email-address');
    req.sessionModel.unset('applicant-full-name');
    req.sessionModel.unset('application-number');
    req.sessionModel.unset('phone-number');
    super.getValues(req, res, next);
  }
};
