Feature('Organisation question about a general enquiry');
Before((I) => {
    I.clearCookie();
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
    I.checkOption('I’m from an employer, community group or other supporting organisation');
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
});

Scenario('I go to the supporting organisation general enquiry page', (I, supportingOrgQuestionPage) => {
    I.seeInCurrentUrl(supportingOrgQuestionPage.url);
});
