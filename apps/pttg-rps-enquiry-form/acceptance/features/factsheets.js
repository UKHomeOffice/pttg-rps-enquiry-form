Feature('Factsheet selection');
Before((I) => {
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
});

const factsheets = [
    {option: 'What the EU Settlement Scheme is and who should apply',
        text: 'Settled status and the EU Settlement Scheme'},
    {option: 'How to apply', text: 'How to apply'},
    {option: 'An application that’s already in progress', text: 'While your application is in progress'},
    {option: 'The result of my application', text: 'After you get a decision'},
    {option: 'I’m from an employer, community group or other supporting organisation',
        text: 'Employers, community groups and supporting organisations'}
];

factsheets.forEach((factsheet) => {

    Scenario(`I click back from the ${factsheet.option} page`, (I, whatIsYourQuestionPage) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.click('.link-back');
        I.seeInCurrentUrl(whatIsYourQuestionPage.url);
    });

    Scenario(`I click through the ${factsheet.option} factsheet`, (I, hasExistingApplicationPage) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.click('Go to enquiry form');
        I.seeInCurrentUrl(hasExistingApplicationPage.url);
    });

    Scenario(`I get the ${factsheet.option} factsheet`, (I) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.see(factsheet.text);
    });

    Scenario(`I get the question page from ${factsheet.option}`, (I, hasExistingApplicationPage) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.see(factsheet.text);
        I.submitForm();
        I.seeInCurrentUrl(hasExistingApplicationPage.url);
    });
});