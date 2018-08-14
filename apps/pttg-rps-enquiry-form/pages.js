const StartPage = require('./pages/start-page');
const WhatIsYourEnquiry = require('./pages/what-is-your-enquiry');

const HowToApplyFactsheet = require('./pages/factsheets/how-to-apply-factsheet');
const LiveApplicationFactsheet = require('./pages/factsheets/live-application-factsheet');
const EligibilityFactsheet = require('./pages/factsheets/eligibility-factsheet');
const DecisionFactsheet = require('./pages/factsheets/decision-factsheet');

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
        WhatIsYourEnquiry,
        HowToApplyFactsheet,
        LiveApplicationFactsheet,
        EligibilityFactsheet,
        DecisionFactsheet,
        EnquiryPage,
        SummaryPage,
        ConfirmationPage
    ])
};
