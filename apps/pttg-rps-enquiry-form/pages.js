const StartPage = require('./pages/start-page');
const WhatIsYourQuestion = require('./pages/what-is-your-question');

const HasExistingApplication = require('./pages/has-existing-application-fork');

const QuestionPage = require('./pages/question');
const ExistingApplicationQuestionPage = require('./pages/existing-application-question');

const SupportingOrgPreamble = require('./pages/supporting-org-question-preamble');
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
        HasExistingApplication,
        QuestionPage,
        ExistingApplicationQuestionPage,
        SupportingOrgPreamble,
        SupportingOrgQuestionPage,
        ApplicationDetails,
        SummaryPage,
        ConfirmationPage
    ])
};
