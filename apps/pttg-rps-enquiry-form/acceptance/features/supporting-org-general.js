const lipsum = require('fast-lorem-ipsum');

Feature('Organisation question about a general enquiry');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.checkOption('Helping someone else to apply');
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
});

Scenario('I go to the supporting organisation general enquiry page', (I, supportingOrgQuestionPage) => {
    I.seeInCurrentUrl(supportingOrgQuestionPage.url);
});

Scenario('I must able to enter data into all fields', (I, supportingOrgQuestionPage) => {
    I.fillField('Your question', lipsum('2000c'));
    I.fillField('Your email address', 'applicant@example.com');
    I.fillField('Your full name', 'Joe Bloggs');
    I.fillField('Organisation name', 'Northwind Traders');

    I.click('Continue');
    I.dontSeeInCurrentUrl(supportingOrgQuestionPage.url);
});

Scenario('I must be prevented from leaving mandatory questions blank', (I) => {
    I.click('Continue');
    I.seeErrors(['#question-body', '#your-email-address', '#your-name', '#organisation-name']);
});
