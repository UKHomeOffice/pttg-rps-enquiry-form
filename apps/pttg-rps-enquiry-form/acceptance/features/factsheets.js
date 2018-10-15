Feature('Factsheet selection');
Before((I, startPage) => {
    I.amOnPage(startPage.url);
    I.click('Start');
});

const options = [
    'What the EU Settlement Scheme is and who should apply',
    'How to apply',
    'An application submitted and in progress',
    'The result of my application',
    'I’m from an employer, community group or other supporting organisation'
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
