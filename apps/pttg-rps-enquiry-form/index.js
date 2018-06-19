'use strict';

const RequireContactReferenceNumberIfShown = require('./behaviours/RequireContactReferenceNumberIfShown');

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/existing-enquiry': {
      fields: ['has-existing-enquiry', 'contact-reference-number'],
      behaviours: [RequireContactReferenceNumberIfShown],
      next: '/confirm',
      forks: [{
        target: '/started-application',
        condition: (req) => {
          const hasExistingEnquiry = req.sessionModel.get('has-existing-enquiry');
          return hasExistingEnquiry === 'no';
        }

      }]
    },
    '/started-application': {
      fields: ['started-application'],
      next: '/confirm',
      forks: [{
        target: '/preapp-or-makingapp',
        condition: (req) => {
          const hasStartedApplication = req.sessionModel.get('started-application');
          return hasStartedApplication === 'no';
        }

      }]
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
