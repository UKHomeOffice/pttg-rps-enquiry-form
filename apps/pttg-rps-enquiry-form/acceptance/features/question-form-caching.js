let assert = require('assert')

Feature('Does not cache personal data in form');
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

Scenario('New application question page does not retain personal data when back button pressed',
function *(I, questionPage) {
    I.amOnPage(questionPage.url);
    fillInTheNewApplicationForm(I);
    navigateAwayFromPage(I);

    pressBrowserBackButton(I);
    I.amOnPage(questionPage.url);

    for(let formField of ['question-body', 'your-email-address', 'your-name', 'phone-number']) {
      assert.equal(yield I.grabValueFrom(`#${formField}`), '');
    }
});

Scenario('Exisiting application question page does not retain personal data when back button pressed',
function *(I, existingApplicationQuestionPage) {
    I.amOnPage(existingApplicationQuestionPage.url);
    fillInTheExistingApplicationForm(I);
    navigateAwayFromPage(I);

    pressBrowserBackButton(I);
    I.amOnPage(existingApplicationQuestionPage.url);

    for(let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number', 'phone-number']) {
      assert.equal(yield I.grabValueFrom(`#${formField}`), '');
    }
});

Scenario('Organisation new application question page does not retain personal data when back button pressed',
function *(I, supportingOrgQuestionPage) {
  I.amOnPage(supportingOrgQuestionPage.url);
  I.fillField('Organisation name', 'Test Company');
  fillInTheNewApplicationForm(I);
  navigateAwayFromPage(I);

  pressBrowserBackButton(I);
  I.amOnPage(supportingOrgQuestionPage.url);

  for(let formField of ['question-body', 'organisation-name', 'your-email-address', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

function fillInTheNewApplicationForm(I) {
  I.fillField('Your question', 'Test question');
  I.fillField('Your email address', 'test@test.com');
  I.fillField('Your name', 'Test User');
  I.fillField('Telephone number', '111222333');
  I.submitForm();
}

function fillInTheExistingApplicationForm(I) {
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
