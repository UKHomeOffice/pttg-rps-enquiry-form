'use strict';

const ContactReferenceNumberCustomValidation = require('./behaviours/contact-reference-number-custom-validation');

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/existing-enquiry': {
      fields: ['has-existing-enquiry', 'contact-reference-number'],
      behaviours: [ContactReferenceNumberCustomValidation],
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
      next: '/liveapp-or-decision',
      forks: [{
        target: '/preapp-or-makingapp',
        condition: (req) => {
          const hasStartedApplication = req.sessionModel.get('started-application');
          return hasStartedApplication === 'no';
        }

      }]
    },
    '/liveapp-or-decision': {
      fields: ['liveapp-or-decision'],
      next: '/liveapp-factsheet',
      forks: [{
        target: '/decision-factsheet',
        condition: (req) => {
          const hasDecision = req.sessionModel.get('liveapp-or-decision');
          return hasDecision === 'no';
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
