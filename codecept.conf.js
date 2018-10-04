const path = require('path');

/* eslint implicit-dependencies/no-implicit: [2, { dev: true }] */
const pagesPath = page => path.resolve(__dirname,
    `./apps/pttg-rps-enquiry-form/acceptance/pages/${page}`);

module.exports = require('so-acceptance').extend({
    name: 'pttg-rps-enquiry-form',
    tests: './apps/*/acceptance/features/**/*.js',
    helpers: {
        WebDriverIO: {
            host: process.env.WEBDRIVER_HOST || 'localhost',
            port: 4444,
            path: '/wd/hub',
            url: process.env.ENDPOINT || 'http://localhost:8080',
            browser: 'chrome',
            desiredCapabilities: {
                chromeOptions: { args: ['headless', 'disable-gpu'] }
            }
        }
    },
    include: {
        startPage: pagesPath('start.js'),
        whatIsYourQuestionPage: pagesPath('what-is-your-question.js'),
        questionPage: pagesPath('question.js'),
        supportingOrgQuestionPage: pagesPath('supporting-org-question.js'),
        hasExistingApplicationPage: pagesPath('has-existing-application.js'),
        existingApplicationQuestionPage: pagesPath('application-question.js'),
        supportingOrgApplicationQuestionPreamblePage: pagesPath('supporting-org-application-question-1.js'),
        supportingOrgApplicationQuestionPage: pagesPath('supporting-org-application-question-2.js')
    }
});
