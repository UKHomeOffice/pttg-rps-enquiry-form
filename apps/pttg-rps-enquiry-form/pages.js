'use strict';

const UserConfirmationEmail = require('./behaviours/user-confirmation-email');
const EnquirySupportEmail = require('./behaviours/enquiry-support-email');

const StartPage = require('./pages/start-page');
const HaveExistingEnquiryPage = require('./pages/have-existing-enquiry');
const HaveSubmittedApplicationPage = require('./pages/have-submitted-application');
const LiveAppOrDecisionPage = require('./pages/liveapp-or-decision');
const PreSubmissionHelpPage = require('./pages/pre-submission-help');

const HowToApplyFactsheet = require('./pages/factsheets/how-to-apply-factsheet');
const LiveApplicationFactsheet = require('./pages/factsheets/live-application-factsheet');
const SupportingDocumentsFactsheet = require('./pages/factsheets/supporting-documents-factsheet');
const DecisionFactsheet = require('./pages/factsheets/decision-factsheet');

const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
const yesSelected = fieldName => isSelected('yes', fieldName);

module.exports = {
    name: 'pttg-rps-enquiry-form',
    baseUrl: '/pttg-rps-enquiry-form',
    steps: {
        [StartPage.path]: StartPage.properties,
        [HaveExistingEnquiryPage.path]: HaveExistingEnquiryPage.properties,
        [HaveSubmittedApplicationPage.path]: HaveSubmittedApplicationPage.properties,
        [LiveAppOrDecisionPage.path]: LiveAppOrDecisionPage.properties,
        [PreSubmissionHelpPage.path]: PreSubmissionHelpPage.properties,
        [HowToApplyFactsheet.path]: HowToApplyFactsheet.properties,
        [LiveApplicationFactsheet.path]: LiveApplicationFactsheet.properties,
        [SupportingDocumentsFactsheet.path]: SupportingDocumentsFactsheet.properties,
        [DecisionFactsheet.path]: DecisionFactsheet.properties,
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
