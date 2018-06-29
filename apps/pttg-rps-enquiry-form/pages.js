'use strict';

const UserConfirmationEmail = require('./behaviours/user-confirmation-email');
const EnquirySupportEmail = require('./behaviours/enquiry-support-email');

const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
const yesSelected = fieldName => isSelected('yes', fieldName);
const noSelected = fieldName => isSelected('no', fieldName);

module.exports = {
  name: 'pttg-rps-enquiry-form',
  baseUrl: '/pttg-rps-enquiry-form',
  steps: {
    '/start-now': {
      next: '/have-existing-enquiry'
    },
    '/have-existing-enquiry': {
      fields: ['do-you-have-existing-enquiry', 'enter-contact-reference-number'],
      next: '/enquiry',
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
    '/liveapp-factsheet': {
      next: '/sufficient-advice'
    },
    '/sufficient-advice': {
      fields: ['require-more-help'],
      forks: [{
        target: '/thankyou',
        condition: noSelected('require-more-help')
      }, {
        target: '/fullname',
        condition: yesSelected('require-more-help')
      }]
    },
    '/thankyou': {
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
      next: '/enquiry',
      forks: [{
        target: '/contact-method-preference',
        condition: (req) => (!!req.sessionModel.get('enter-phone-number'))
      }, {
        target: '/unique-reference-number',
        condition: (req) => {
          return yesSelected('submitted-application') && (!req.sessionModel.get('enter-phone-number'));
        }
      }]
    },
    '/contact-method-preference': {
      fields: ['contact-method-preference'],
      next: '/enquiry',
    },
    '/unique-reference-number': {
      fields: ['enter-unique-reference-number'],
      next: '/enquiry'
    },
    '/enquiry': {
      fields: ['enter-enquiry-body'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page'), EnquirySupportEmail, UserConfirmationEmail],
      sections: {
        'enquiry-details': [
          'do-you-have-existing-enquiry',
          'enter-contact-reference-number',
          'submitted-application',
          'liveapp-or-decision',
          'pre-submission-help-choices',
          'enter-unique-reference-number'
        ],
        'contact-details': [
          'enter-fullname',
          'enter-date-of-birth',
          'enter-email',
          'enter-phone-number',
          'contact-method-preference'
        ],
        'enquiry-body': [
          'enter-enquiry-body'
        ]
      },
      next: '/confirmation'
    },
    '/confirmation': {
      template: 'confirmation'
    }
  }
};
