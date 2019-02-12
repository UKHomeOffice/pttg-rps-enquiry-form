let assert = require('assert')

Feature('Question About Existing Application Form');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
    I.submitForm();
    I.checkOption('What the EU Settlement Scheme is and who should apply');
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
});

Scenario('Form data not cached when back browser button pressed',
function *(I, existingApplicationQuestionPage) {
    I.amOnPage(existingApplicationQuestionPage.url);
    fillInTheForm(I);
    navigateAwayFromPage(I);

    pressBrowserBackButton(I);
    I.amOnPage(existingApplicationQuestionPage.url);

    for(let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number', 'phone-number']) {
      assert.equal(yield I.grabValueFrom(`#${formField}`), '');
    }
});

function fillInTheForm(I) {
  I.fillField('Your question', 'Test question');
  I.fillField('Applicant’s email address', 'test@test.com');
  I.fillField('Applicant’s full name', 'Test User');
  I.fillField('Application number', '2418904');
  I.fillField('Telephone number', '111222333');
  I.submitForm();
}

function navigateAwayFromPage(I) {
  I.click('Back');
  I.click('Back');
}

function pressBrowserBackButton(I) {
  I.executeScript(() => {
    window.history.back();
  })
};
