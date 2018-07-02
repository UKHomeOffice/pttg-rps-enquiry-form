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
const EnquiryPage = require('./pages/enquiry');
const SummaryPage = require('./pages/summary');
const ConfirmationPage = require('./pages/confirmation');

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
        [EnquiryPage.path]: EnquiryPage.properties,
        [SummaryPage.path]: SummaryPage.properties,
        [ConfirmationPage.path]: ConfirmationPage.properties
    }
};
