Feature('Existing application fork');
Before((I, startPage) => {
    I.amOnPage(startPage.url);
    I.click('Start');
});

const NON_ORGANISATION_OPTION = 'Who can apply';
const ORGANISATION_OPTION = 'Helping someone else to apply';


Scenario('I get to the non-application non-organisation question page', (I, questionPage) => {
    I.checkOption(NON_ORGANISATION_OPTION);
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
    I.seeInCurrentUrl(questionPage.url);
});

Scenario('I get to the existing application non-organisation question page', (I, existingApplicationQuestionPage) => {
    I.checkOption(NON_ORGANISATION_OPTION);
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
    I.seeInCurrentUrl(existingApplicationQuestionPage.url);
});

Scenario('I get to the generic organisation question page if I have no application', (I, supportingOrgQuestionPage) => {
    I.checkOption(ORGANISATION_OPTION);
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
    I.seeInCurrentUrl(supportingOrgQuestionPage.url);
});

Scenario('I get to the organisation question pages if I have an application',
    (I, supportingOrgApplicationQuestionPreamblePage) => {
        I.checkOption(ORGANISATION_OPTION);
        I.submitForm();
        I.checkOption('Yes');
        I.submitForm();
        I.seeInCurrentUrl(supportingOrgApplicationQuestionPreamblePage.url);
    });
