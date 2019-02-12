let assert = require('assert')

Feature('Does not cache personal data in form');
Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
});

Scenario('New application question page does not retain personal data when back button pressed',
function *(I, questionPage) {
    I.checkOption('What the EU Settlement Scheme is and who should apply');
    I.submitForm();
    I.checkOption('No');
    I.submitForm();
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
    I.checkOption('What the EU Settlement Scheme is and who should apply');
    I.submitForm();
    I.checkOption('Yes');
    I.submitForm();
    fillInTheExistingApplicationForm(I);
    I.fillField('Telephone number', '111222333');
    I.submitForm();
    navigateAwayFromPage(I);

    pressBrowserBackButton(I);
    I.amOnPage(existingApplicationQuestionPage.url);

    for(let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number', 'phone-number']) {
      assert.equal(yield I.grabValueFrom(`#${formField}`), '');
    }
});

Scenario('Organisation new application question page does not retain personal data when back button pressed',
function *(I, supportingOrgQuestionPage) {
  I.checkOption('I’m from an employer, community group or other supporting organisation');
  I.submitForm();
  I.checkOption('No');
  I.submitForm();

  I.fillField('Organisation name', 'Test Company');
  fillInTheNewApplicationForm(I);
  navigateAwayFromPage(I);

  pressBrowserBackButton(I);
  I.amOnPage(supportingOrgQuestionPage.url);

  for(let formField of ['question-body', 'organisation-name', 'your-email-address', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('About the organisation page does not retain personal data when back button pressed',
function *(I, supportingOrgApplicationQuestionPreamblePage) {
  I.checkOption('I’m from an employer, community group or other supporting organisation');
  I.submitForm();
  I.checkOption('Yes');
  I.submitForm();
  fillInOrganisationDetails(I);
  navigateAwayFromPage(I);

  pressBrowserBackButton(I);
  I.amOnPage(supportingOrgApplicationQuestionPreamblePage.url);

  for(let formField of ['organisation-name', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('Suppporting organisation question page does not retain personal data when back button pressed',
function *(I, supportingOrgApplicationQuestionPage) {
  I.checkOption('I’m from an employer, community group or other supporting organisation');
  I.submitForm();
  I.checkOption('Yes');
  I.submitForm();
  fillInOrganisationDetails(I);
  fillInTheExistingApplicationForm(I);
  I.submitForm();
  pressBrowserBackButton(I);

  I.amOnPage(supportingOrgApplicationQuestionPage.url);

  for(let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

function fillInOrganisationDetails(I) {
  I.fillField('Organisation name', 'Test Company');
  I.fillField('Your name', 'Test User');
  I.fillField('Telephone number', '111222333');
  I.submitForm();
}

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
