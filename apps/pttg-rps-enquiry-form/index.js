'use strict';

const ContactReferenceNumberCustomValidation = require('./behaviours/contact-reference-number-custom-validation');
const contactReferenceNumberField = 'enter-contact-reference-number';
const existingEnquiryField = 'do-you-have-existing-enquiry';

const yesSelected = fieldName => req => req.sessionModel.get(fieldName) === 'yes';
const noSelected = fieldName => req => req.sessionModel.get(fieldName) === 'no';

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/have-existing-enquiry': {
      fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
      behaviours: [ContactReferenceNumberCustomValidation({contactReferenceNumberField, existingEnquiryField})],
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
        target: '/supporting-documents',
        condition: yesSelected('have-you-started-application')
      }, {
        target: '/how-to-apply',
        condition: noSelected('have-you-started-application')
      }]
    },
    '/how-to-apply': {
      next: '/sufficient-advice'
    },
    '/supporting-documents': {
      next: '/sufficient-advice'
    },
    '/decision-factsheet': {
      next: '/sufficient-advice'
    },
    '/sufficient-advice': {
      fields: ['sufficient-advice'],
      next: '/contact-info',
      forks: [{
        target: '/thankyou',
        condition: (req) => {
          const hasSufficientAdvice = req.sessionModel.get('sufficient-advice');
          return hasSufficientAdvice === 'no';
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
