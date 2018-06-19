'use strict';

const ContactReferenceNumberCustomValidation = require('./behaviours/contact-reference-number-custom-validation');

const yesSelected = (fieldName, req) => req.sessionModel.get(fieldName) === 'yes';
const noSelected = (fieldName, req) => req.sessionModel.get(fieldName) === 'no';

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/have-existing-enquiry': {
      fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
      behaviours: [ContactReferenceNumberCustomValidation],
      forks: [{
        target: '/have-you-submitted-application',
        condition: (req) => {
          const hasExistingEnquiry = req.sessionModel.get('do-you-have-existing-enquiry');
          return hasExistingEnquiry === 'no';
        }
      }]
    },
    '/have-submitted-application': {
      fields: ['submitted-application'],
      next: '/liveapp-or-decision',
      forks: [{
        target: '/liveapp-or-decision',
        condition: req => yesSelected('submitted-application', req)
      }, {
        target: '/have-you-started-application',
        condition: req => noSelected('started-application', req)
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
    '/have-started-application': {
      fields: ['have-you-started-an-application'],
      forks: [{
        target: '/foo',
        condition: req => yesSelected('have-you-started-an-application', req)
      }, {
        target: '/bar',
        condition: req => noSelected('have-you-started-an-application', req)
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
