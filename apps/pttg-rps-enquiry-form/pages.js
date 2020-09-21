const StartPage = require('./pages/start-page');
const PrivacyNotice = require('./pages/privacy-policy');
const Cookies = require('./pages/cookies');
const AccessibilityStatement = require('./pages/accessibility-statement');

const WhatIsYourQuestion = require('./pages/what-is-your-question');

const HasExistingApplication = require('./pages/has-existing-application-fork');

const QuestionPage = require('./pages/question');
const ExistingApplicationQuestionPage = require('./pages/existing-application-question');

const SupportingOrgQuestionPage = require('./pages/supporting-org-question');

const SupportingOrgApplicationPage1 = require('./pages/supporting-org-application-question-1');
const SupportingOrgApplicationPage2 = require('./pages/supporting-org-application-question-2');

const SummaryPage = require('./pages/summary');
const ConfirmationPage = require('./pages/confirmation');

const Leave = require('./pages/leave');

const pagesToSteps = pages => (pages.reduce((obj, item) => {
    obj[item.path] = item.properties;
    return obj;
}, {}));

module.exports = {
    name: 'pttg-rps-enquiry-form',
    steps: pagesToSteps([
        StartPage,
        PrivacyNotice,
        Cookies,
        AccessibilityStatement,
        WhatIsYourQuestion,
        HasExistingApplication,
        QuestionPage,
        ExistingApplicationQuestionPage,
        SupportingOrgQuestionPage,
        SupportingOrgApplicationPage1,
        SupportingOrgApplicationPage2,
        SummaryPage,
        ConfirmationPage,
        Leave
    ])
};
