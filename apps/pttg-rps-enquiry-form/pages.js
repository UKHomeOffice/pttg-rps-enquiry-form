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

const FullnamePage = require('./pages/fullname');
const DateOfBirthPage = require('./pages/date-of-birth');
const ContactInformationPage = require('./pages/contact-information');
const ContactMethodPreferencePage = require('./pages/contact-method-preference');
const UniqueReferenceNumberPage = require('./pages/unique-reference-number');

// const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
// const yesSelected = fieldName => isSelected('yes', fieldName);

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
        [FullnamePage.path]: FullnamePage.properties,
        [DateOfBirthPage.path]: DateOfBirthPage.properties,
        [ContactInformationPage.path]: ContactInformationPage.properties,
        [ContactMethodPreferencePage.path]: ContactMethodPreferencePage.properties,
        [UniqueReferenceNumberPage.path]: UniqueReferenceNumberPage.properties,

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
