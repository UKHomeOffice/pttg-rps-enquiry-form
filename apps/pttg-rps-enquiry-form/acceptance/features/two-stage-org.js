Feature('First organisation page');
Before((I) => {
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
    I.checkOption('I’m from an employer, community group or other supporting organisation');
    I.submitForm();
    I.click('Go to enquiry form');
});


Scenario('I am on the right page', (I, supportingOrgQuestionPreamblePage) => {
    I.seeInCurrentUrl(supportingOrgQuestionPreamblePage.url);
});

Scenario('I go to the next organisation page', (I, supportingOrgQuestionPage) => {
    I.fillField('Your name', 'Joe Bloggs');
    I.fillField('Organisation name', 'Contoso');
    I.submitForm();
    I.seeInCurrentUrl(supportingOrgQuestionPage.url);
});

Scenario('I must fill in required fields', (I) => {
    I.submitForm();
    I.seeErrors(['#organisation-name', '#your-name']);
});

Scenario('I must not be able to enter an invalid phone number', (I) => {
    I.fillField('Telephone number', 'I would like to have seen Montana.');
    I.submitForm();
    I.seeErrors(['#phone-number']);
});


