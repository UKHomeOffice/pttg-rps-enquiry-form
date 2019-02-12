let assert = require('assert')

Feature('Does not cache personal data in form');
Before((I, startPage) => {
  I.clearCookie();
  I.amOnPage(startPage.url);
  I.click('Start');
});

Scenario('New application question page does not retain personal data when back button pressed',
function *(I, questionPage) {
  navigateThroughForm(I, 'What the EU Settlement Scheme is and who should apply', 'No');
  fillInTheNewApplicationForm(I);
  I.submitForm();

  pressBrowserBackButton(I);
  I.seeInCurrentUrl(questionPage.url);

  for (let formField of ['question-body', 'your-email-address', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('Exisiting application question page does not retain personal data when back button pressed',
function *(I, existingApplicationQuestionPage) {
  navigateThroughForm(I, 'What the EU Settlement Scheme is and who should apply', 'Yes');
  fillInTheExistingApplicationForm(I);
  I.fillField('Telephone number', '111222333');
  I.submitForm();

  pressBrowserBackButton(I);
  I.seeInCurrentUrl(existingApplicationQuestionPage.url);

  for (let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('Organisation new application question page does not retain personal data when back button pressed',
function *(I, supportingOrgQuestionPage) {
  navigateThroughForm(I, 'I’m from an employer, community group or other supporting organisation', 'No');
  fillInTheNewApplicationForm(I);
  I.fillField('Organisation name', 'Test Company');
  I.submitForm();

  pressBrowserBackButton(I);
  I.seeInCurrentUrl(supportingOrgQuestionPage.url);

  for (let formField of ['question-body', 'organisation-name', 'your-email-address', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('About the organisation page does not retain personal data when back button pressed',
function *(I, supportingOrgApplicationQuestionPreamblePage) {
  navigateThroughForm(I, 'I’m from an employer, community group or other supporting organisation', 'Yes');

  fillInOrganisationDetails(I);
  I.submitForm();

  pressBrowserBackButton(I);
  I.seeInCurrentUrl(supportingOrgApplicationQuestionPreamblePage.url);

  for (let formField of ['organisation-name', 'your-name', 'phone-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

Scenario('Suppporting organisation question page does not retain personal data when back button pressed',
function *(I, supportingOrgApplicationQuestionPage) {
  navigateThroughForm(I, 'I’m from an employer, community group or other supporting organisation', 'Yes');
  fillInOrganisationDetails(I);
  I.submitForm();
  fillInTheExistingApplicationForm(I);
  I.submitForm();
  pressBrowserBackButton(I);

  I.seeInCurrentUrl(supportingOrgApplicationQuestionPage.url);

  for (let formField of ['question-body', 'applicant-email-address', 'applicant-full-name', 'application-number']) {
    assert.equal(yield I.grabValueFrom(`#${formField}`), '');
  }
});

function navigateThroughForm(I, whatQuestionIsAbout, isExistingApplication) {
  I.checkOption(whatQuestionIsAbout);
  I.submitForm();
  I.checkOption(isExistingApplication);
  I.submitForm();
}

function fillInOrganisationDetails(I) {
  I.fillField('Organisation name', 'Test Company');
  I.fillField('Your name', 'Test User');
  I.fillField('Telephone number', '111222333');
}

function fillInTheNewApplicationForm(I) {
  I.fillField('Your question', 'Test question');
  I.fillField('Your email address', 'test@test.com');
  I.fillField('Your name', 'Test User');
  I.fillField('Telephone number', '111222333');
}

function fillInTheExistingApplicationForm(I) {
  I.fillField('Your question', 'Test question');
  I.fillField('Applicant’s email address', 'test@test.com');
  I.fillField('Applicant’s full name', 'Test User');
  I.fillField('Application number', '2418904');
}

function pressBrowserBackButton(I) {
  I.executeScript(() => {
    window.history.back();
  })
};
