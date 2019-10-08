function navigateThroughForm(I, whatQuestionIsAbout, isExistingApplication) {
    I.checkOption(whatQuestionIsAbout);
    I.submitForm();
    I.checkOption(isExistingApplication);
    I.submitForm();
}

function fillInTheNewApplicationForm(I) {
    I.fillField('Your question', 'Test question');
    I.fillField('Your email address', 'test@test.com');
    I.fillField('Your full name', 'Test User');
    I.fillField('Telephone number', '111222333');
    I.submitForm();
}

function pressBrowserBackButton(I) {
    I.executeScript(() => {
        // eslint-disable-next-line no-undef
        window.history.back();
    });
}

Feature('Does not cache personal data in form');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
});

Scenario('Once the form is submitted, pressing back button stops user getting back to form data',
    function(I) {
        navigateThroughForm(I, 'Who can apply', 'No');
        fillInTheNewApplicationForm(I);
        I.submitForm();

        I.seeInCurrentUrl('confirmation');
        pressBrowserBackButton(I);
        I.seeInCurrentUrl('start');
    });
