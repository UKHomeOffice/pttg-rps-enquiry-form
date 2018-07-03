const StartPage = require('./pages/start-page');
const HaveSubmittedApplicationPage = require('./pages/have-submitted-application');
const LiveAppOrDecisionPage = require('./pages/liveapp-or-decision');
const PreSubmissionHelpPage = require('./pages/pre-submission-help');

const HowToApplyFactsheet = require('./pages/factsheets/how-to-apply-factsheet');
const LiveApplicationFactsheet = require('./pages/factsheets/live-application-factsheet');
const SupportingDocumentsFactsheet = require('./pages/factsheets/supporting-documents-factsheet');
const DecisionFactsheet = require('./pages/factsheets/decision-factsheet');

const FullnamePage = require('./pages/fullname');
const ContactInformationPage = require('./pages/contact-information');
const ContactMethodPreferencePage = require('./pages/contact-method-preference');

const EnquiryPage = require('./pages/enquiry');

const SummaryPage = require('./pages/summary');
const ConfirmationPage = require('./pages/confirmation');

const pagesToSteps = pages => (pages.reduce((obj, item) => {
    obj[item.path] = item.properties;
    return obj;
}, {}));

module.exports = {
    name: 'pttg-rps-enquiry-form',
    baseUrl: '/pttg-rps-enquiry-form',
    steps: pagesToSteps([
        StartPage,
        HaveSubmittedApplicationPage,
        LiveAppOrDecisionPage,
        PreSubmissionHelpPage,
        HowToApplyFactsheet,
        LiveApplicationFactsheet,
        SupportingDocumentsFactsheet,
        DecisionFactsheet,
        FullnamePage,
        ContactInformationPage,
        ContactMethodPreferencePage,
        EnquiryPage,
        SummaryPage,
        ConfirmationPage
    ])
};
