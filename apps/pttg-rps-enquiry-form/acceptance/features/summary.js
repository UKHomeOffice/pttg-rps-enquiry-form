const assert = require('assert');

Feature('Summary page');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.checkOption('How to apply and the application process');
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
    I.fillField('Your question', 'any question');
    I.fillField('Your full name', 'Any Name');
    I.fillField('Your email address', 'email@email.com');
    I.submitForm();
});

function clickLeaveButton(I, leavePage) {
    I.click('Cancel and leave this service');
    I.seeInCurrentUrl(leavePage.url);
    I.see('You have now left the service.');
}

function pressBrowserBackButton(I) {
    I.executeScript(() => {
        // eslint-disable-next-line no-undef
        window.history.back();
    });
}

Scenario('I can leave the summary page without submitting the form',
    function *(I, leavePage) {
        clickLeaveButton(I, leavePage);

        const feedbackLink = yield I.grabAttributeFrom('#feedback', 'href');
        const feedbackText = yield I.grabTextFrom('#feedback');
        assert.equal(feedbackLink, 'https://www.gov.uk/done/eu-settled-status-enquiries');
        assert.equal(feedbackText, 'What did you think of this service?');

        const govUkHomePageLink = yield I.grabAttributeFrom('#returnToGovUk', 'href');
        const govUkHomePageText = yield I.grabTextFrom('#returnToGovUk');
        assert.equal(govUkHomePageLink, 'http://gov.uk/');
        assert.equal(govUkHomePageText, 'Go back to GOV.UK');
    });

Scenario('When I leave the summary page without submitting the form my session is cleared',
    function(I, leavePage, startPage) {
        clickLeaveButton(I, leavePage);
        pressBrowserBackButton(I);
        I.seeInCurrentUrl(startPage.url);
    });
