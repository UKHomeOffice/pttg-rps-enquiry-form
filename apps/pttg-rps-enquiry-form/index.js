'use strict';

const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
const yesSelected = fieldName => isSelected('yes', fieldName);
const noSelected = fieldName => isSelected('no', fieldName);

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/have-existing-enquiry': {
      fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
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
        target: '/pre-submission-help',
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
    '/pre-submission-help': {
      fields: ['pre-submission-help-choices'],
      forks: [{
        target: '/supporting-documents',
        condition: isSelected('supporting-documents', 'pre-submission-help-choices')
      }, {
        target: '/how-to-apply',
        condition: isSelected('how-to-apply', 'pre-submission-help-choices')
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
      forks: [{
        target: '/thankyou',
        condition: noSelected('sufficient-advice')
      }, {
        target: '/fullname',
        condition: yesSelected('sufficient-advice')
      }]
    },
    '/fullname': {
      fields: ['enter-fullname'],
      next: '/date-of-birth'
    },
    '/date-of-birth': {
      fields: ['enter-date-of-birth'],
      next: '/contact-information'
    },
    '/contact-information': {
      fields: ['enter-email', 'enter-phone-number'],
      next: '/unique-reference-number',
      forks: [{
        target: '/unique-reference-number',
        condition: yesSelected('submitted-application')
      }, {
        target: '/confirm',
        condition: noSelected('submitted-application')
      }]
    },
    '/unique-reference-number': {
      fields: ['enter-unique-reference-number'],
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
