const steps = require('../../');

Feature('Start Page');

Before((
    I,
    startPage
) => {
    I.visitPage(startPage, steps);
});

Scenario('When I click start I am taken to the What Is Your Question page', (
    I,
    whatIsYourQuestionPage
) => {
    I.submitForm();
    I.seeInCurrentUrl(whatIsYourQuestionPage.url);
});
