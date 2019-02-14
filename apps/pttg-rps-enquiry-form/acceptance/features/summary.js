Feature('Summary page');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.checkOption('How to apply');
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
    I.fillField('Your question', 'any question');
    I.fillField('Your name', 'Any Name');
    I.fillField('Your email address', 'email@email.com');
    I.submitForm();
});

Scenario('I can leave the summary page and clear my session without submitting the form', (I, leavePage) => {
    I.see('Cancel and leave this service', 'button');
    I.click('Cancel and leave this service');
    I.seeInCurrentUrl(leavePage.url);
});
