const assert = require('assert');

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

Scenario('I can leave the summary page and clear my session without submitting the form',
  function *(I, leavePage) {
    I.see('Cancel and leave this service', 'button');
    I.click('Cancel and leave this service');
    I.seeInCurrentUrl(leavePage.url);

    I.see('You have now left the service.');

    let feedbackLink = yield I.grabAttributeFrom('#feedback', 'href');
    let feedbackText = yield I.grabTextFrom('#feedback');
    assert.equal(feedbackLink, 'https://www.gov.uk/done/eu-settled-status-enquiries');
    assert.equal(feedbackText, 'What did you think of this service?');

    let govUkHomePageLink = yield I.grabAttributeFrom('#returnToGovUk', 'href');
    let govUkHomePageText = yield I.grabTextFrom('#returnToGovUk');
    assert.equal(govUkHomePageLink, 'http://gov.uk/');
    assert.equal(govUkHomePageText, 'Go back to GOV.UK');
});
