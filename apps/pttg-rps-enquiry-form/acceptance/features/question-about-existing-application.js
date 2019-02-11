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
    I.fillField('Your question', 'Test question');
    I.fillField('Applicant’s email address', 'test@test.com');
    I.fillField('Applicant’s full name', 'Test User');
    I.fillField('Application number', '2418904');
    I.submitForm();

    I.click('Back');
    I.seeInCurrentUrl(existingApplicationQuestionPage.url);
    I.click('Back');
    // hit the browser back button
    I.executeScript(() => {
      window.history.back();
    })
    I.seeInCurrentUrl(existingApplicationQuestionPage.url);

    let questionText = yield I.grabValueFrom('#question-body');
    assert.equal(questionText, '');
});
