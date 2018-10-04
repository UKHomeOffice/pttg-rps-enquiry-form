Feature('Organisation question about application');
Before((I) => {
    I.clearCookie();
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
    I.checkOption('I’m from an employer, community group or other supporting organisation');
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
});

Scenario('I go to the first supporting organisation application page',
    (I, supportingOrgApplicationQuestionPreamblePage) => {
        I.seeInCurrentUrl(supportingOrgApplicationQuestionPreamblePage.url);
    });

Scenario('I go to the second supporting organisation application page', (I, supportingOrgApplicationQuestionPage) => {
    I.fillField('Your name', 'Joe Bloggs');
    I.fillField('Organisation name', 'Contoso');
    I.click('Continue');
    I.seeInCurrentUrl(supportingOrgApplicationQuestionPage.url);
    I.seeElements(['#applicant-full-name', '#application-number']);
});

Scenario('I must fill in required fields on the first organisation page', (I) => {
    I.click('Continue');
    I.seeErrors(['#organisation-name', '#your-name']);
});

Scenario('I must not be able to enter an invalid phone number', (I) => {
    I.fillField('Telephone number', 'I would like to have seen Montana.');
    I.click('Continue');
    I.seeErrors(['#phone-number']);
});

