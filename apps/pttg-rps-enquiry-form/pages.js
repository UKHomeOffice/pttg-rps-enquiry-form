const StartPage = require('./pages/start-page');
const WhatIsYourQuestion = require('./pages/what-is-your-question');

const HowToApplyFactsheet = require('./pages/factsheets/how-to-apply-factsheet');
const LiveApplicationFactsheet = require('./pages/factsheets/live-application-factsheet');
const AboutSchemeFactsheet = require('./pages/factsheets/about-the-scheme');
const DecisionFactsheet = require('./pages/factsheets/decision-factsheet');
const SupportingOrgFactsheet = require('./pages/factsheets/supporting-org-factsheet');

const QuestionPage = require('./pages/question');
const SupportingOrgQuestionPage = require('./pages/supporting-org-question');
const ApplicationDetails = require('./pages/application-details');

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
        WhatIsYourQuestion,
        HowToApplyFactsheet,
        LiveApplicationFactsheet,
        AboutSchemeFactsheet,
        DecisionFactsheet,
        SupportingOrgFactsheet,
        QuestionPage,
        SupportingOrgQuestionPage,
        ApplicationDetails,
        SummaryPage,
        ConfirmationPage
    ])
};
