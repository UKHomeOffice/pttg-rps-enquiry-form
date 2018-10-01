Feature('Factsheet selection');
Before((I) => {
    I.amOnPage('/pttg-rps-enquiry-form/start');
    I.click('Start');
});

const factsheets = [
    {option: 'What the EU Settlement Scheme is and who should apply',
        text: 'Settled status and the EU Settlement Scheme'},
    {option: 'How to apply', text: 'How to apply'},
    {option: 'An application submitted and in progress', text: 'While your application is in progress'},
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

    Scenario(`I click through the ${factsheet.option} factsheet`, (I, questionPage) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.click('Go to enquiry form');
        I.seeInCurrentUrl(questionPage.url);
    });

    Scenario(`I get the ${factsheet.option} factsheet`, (I) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.see(factsheet.text);
    });

    Scenario(`I get the question page from ${factsheet.option}`, (I, questionPage) => {
        I.checkOption(factsheet.option);
        I.submitForm();
        I.see(factsheet.text);
        I.submitForm();
        I.seeInCurrentUrl(questionPage.url);
    });
});

Scenario(`I get the question page from ${factsheets[4].option}`, (I, supportingOrgQuestionPage) => {
    I.checkOption(factsheets[4].option);
    I.submitForm();
    I.see(factsheets[4].text);
    I.submitForm();
    I.seeInCurrentUrl(supportingOrgQuestionPage.url);
});
