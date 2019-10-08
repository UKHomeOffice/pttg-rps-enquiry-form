const lipsum = require('fast-lorem-ipsum');

Feature('Organisation question about application');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.checkOption('Helping someone else to apply');
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
});

Scenario('I go to the first supporting organisation application page',
    (I, supportingOrgApplicationQuestionPreamblePage) => {
        I.seeInCurrentUrl(supportingOrgApplicationQuestionPreamblePage.url);
    });

Scenario('I go to the second supporting organisation application page', (I, supportingOrgApplicationQuestionPage) => {
    I.fillField('Your full name', 'Joe Bloggs');
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

Feature('Organisation question about application (page two)');
Before((I, startPage, supportingOrgApplicationQuestionPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.checkOption('Helping someone else to apply');
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
    I.fillField('Your full name', 'Joe Bloggs');
    I.fillField('Organisation name', 'Contoso');
    I.click('Continue');
    I.seeInCurrentUrl(supportingOrgApplicationQuestionPage.url);
});

Scenario('I must be prevented from leaving mandatory questions blank', (I) => {
    I.click('Continue');
    I.seeErrors(['#question-body', '#applicant-email-address', '#applicant-full-name', '#application-number']);
});

Scenario('I must able to enter data into all fields', (I, supportingOrgApplicationQuestionPage) => {
    I.fillField('Your question', lipsum('2000c'));
    I.fillField('Applicant’s email address', 'applicant@example.com');
    I.fillField('Applicant’s full name', 'Joe Bloggs');
    I.fillField('Application number', '1234-0000-0000-0000-0001');

    I.click('Continue');
    I.dontSeeInCurrentUrl(supportingOrgApplicationQuestionPage.url);
});


Scenario('I must not be able to enter too much text (client-side)', (I) => {
    const text = lipsum('3000c');
    I.fillField('Your question', lipsum('3000c'));
    I.seeInField('Your question', text.substr(0, 2000));
});
