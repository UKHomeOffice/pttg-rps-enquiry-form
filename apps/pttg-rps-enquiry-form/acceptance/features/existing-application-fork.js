Feature('Existing application fork');
Before((I) => {
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
});

const NON_ORGANISATION_OPTION = 'What the EU Settlement Scheme is and who should apply';

Scenario('I get to the non-application non-organisation question page', (I, questionPage) => {
    I.checkOption(NON_ORGANISATION_OPTION);
    I.submitForm();
    I.click('Go to enquiry form');
    I.checkOption('No');
    I.submitForm();
    I.seeInCurrentUrl(questionPage.url);
});

Scenario('I get to the existing application non-organisation question page', (I, existingApplicationQuestionPage) => {
    I.checkOption(NON_ORGANISATION_OPTION);
    I.submitForm();
    I.click('Go to enquiry form');
    I.checkOption('Yes');
    I.submitForm();
    I.seeInCurrentUrl(existingApplicationQuestionPage.url);
});
