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
        target: '/have-submitted-application',
        condition: (req) => noSelected('do-you-have-existing-enquiry', req)
      }]
    },
    '/have-submitted-application': {
      fields: ['submitted-application'],
      forks: [{
        target: '/liveapp-or-decision',
        condition: req => yesSelected('submitted-application', req)
      }, {
        target: '/have-started-application',
        condition: req => noSelected('submitted-application', req)
      }]
    },
    '/liveapp-or-decision': {
      fields: ['liveapp-or-decision'],
      next: '/liveapp-factsheet',
      forks: [{
        target: '/decision-factsheet',
        condition: (req) => noSelected('liveapp-or-decision', req)
      }]
    },
    '/have-started-application': {
      fields: ['have-you-started-application'],
      forks: [{
        target: '/foo',
        condition: req => yesSelected('have-you-started-application', req)
      }, {
        target: '/how-to-apply',
        condition: req => noSelected('have-you-started-application', req)
      }]
    },
    '/how-to-apply': {},
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
