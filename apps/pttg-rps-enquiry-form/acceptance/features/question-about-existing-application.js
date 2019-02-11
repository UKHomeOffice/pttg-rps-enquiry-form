Feature('Question About Existing Application Form');
Before((I, existingApplicationQuestionPage) => {
    I.amOnPage(existingApplicationQuestionPage.url);

});

Scenario('Form data not cached when back browser button pressed', (I, existingApplicationQuestionPage) => {
    I.fillField('question-body', 'Test question');
    I.fillField('applicant-email-address', 'test@test.com');
    I.fillField('applicant-full-name', 'Test User');
    I.fillField('application-number', '2418904');
    I.submitForm();
    I.seeInCurrentUrl(confirmationPage.url);
    
    // I.checkOption('No');
    // I.submitForm();
    // I.seeInCurrentUrl(questionPage.url);
});
