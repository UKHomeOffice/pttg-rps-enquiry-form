Feature('Factsheet selection');
Before((I, startPage) => {
    I.amOnPage(startPage.url);
    I.click('Start');
});

const options = [
    'Who can apply',
    'How to apply and the application process',
    'After you have submitted your application',
    'The result you have received',
    'Helping someone else to apply'
];

options.forEach((option) => {
    Scenario(`I click back from the page after ${option}`, (I, whatIsYourQuestionPage) => {
        I.checkOption(option);
        I.submitForm();
        I.click('.link-back');
        I.seeInCurrentUrl(whatIsYourQuestionPage.url);
    });

    Scenario(`I get the existing application page after selecting ${option}`, (I, hasExistingApplicationPage) => {
        I.checkOption(option);
        I.submitForm();
        I.seeInCurrentUrl(hasExistingApplicationPage.url);
    });
});
