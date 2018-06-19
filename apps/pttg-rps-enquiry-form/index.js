'use strict';

const ContactReferenceNumberCustomValidation = require('./behaviours/contact-reference-number-custom-validation');

const yesSelected = fieldName => req => req.sessionModel.get(fieldName) === 'yes';
const noSelected = fieldName => req => req.sessionModel.get(fieldName) === 'no';

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/have-existing-enquiry': {
      fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
      behaviours: [ContactReferenceNumberCustomValidation],
      forks: [{
        target: '/have-submitted-application',
        condition: noSelected('do-you-have-existing-enquiry')
      }]
    },
    '/have-submitted-application': {
      fields: ['submitted-application'],
      forks: [{
        target: '/liveapp-or-decision',
        condition: yesSelected('submitted-application')
      }, {
        target: '/have-started-application',
        condition: noSelected('submitted-application')
      }]
    },
    '/liveapp-or-decision': {
      fields: ['liveapp-or-decision'],
      next: '/liveapp-factsheet',
      forks: [{
        target: '/decision-factsheet',
        condition: noSelected('liveapp-or-decision')
      }]
    },
    '/have-started-application': {
      fields: ['have-you-started-application'],
      forks: [{
        target: '/foo',
        condition: yesSelected('have-you-started-application')
      }, {
        target: '/how-to-apply',
        condition: noSelected('have-you-started-application')
      }]
    },
    '/how-to-apply': {},
    '/decision-factsheet': {
      next: '/confirm'
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
