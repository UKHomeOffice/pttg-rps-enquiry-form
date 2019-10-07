const assert = require('assert');

Feature('Change buttons on the confirm page should allow user to change the values');

Before((I, startPage) => {
    I.clearCookie();
    I.amOnPage(startPage.url);
    I.click('Start');
});

const QUESTION_1 = 'Test question';
const QUESTION_2 = 'Question 2';
const EMAIL_1 = 'test@test.com';
const EMAIL_2 = 'test2@test.com';
const NAME_1 = 'Test User';
const NAME_2 = 'Another user';
const TELEPHONE_1 = '111222333';
const TELEPHONE_2 = '999888777';
const APPLICATION_NUMBER_1 = 'abc123';
const APPLICATION_NUMBER_2 = '25asf';
const ORGANISATION_1 = 'some company ltd.';
const ORGANISATION_2 = 'another org';

Scenario('A user can update fields on the question page by clicking the Change button',
    function *(I) {
        I.checkOption('How to apply and the application process');
        I.submitForm();
        I.checkOption('No');
        I.submitForm();

        I.fillField('Your question', QUESTION_1);
        I.fillField('Your email address', EMAIL_1);
        I.fillField('Your full name', NAME_1);
        I.fillField('Telephone number', TELEPHONE_1);
        I.submitForm();

        I.see(QUESTION_1);
        I.see(EMAIL_1);
        I.see(NAME_1);
        I.see(TELEPHONE_1);

        I.click('#question-body-change');
        I.seeInCurrentUrl('edit');

        assert.equal(yield I.grabValueFrom('#question-body'), QUESTION_1);
        assert.equal(yield I.grabValueFrom('#your-name'), NAME_1);
        assert.equal(yield I.grabValueFrom('#your-email-address'), EMAIL_1);
        assert.equal(yield I.grabValueFrom('#phone-number'), TELEPHONE_1);

        I.fillField('Your question', QUESTION_2);
        I.fillField('Your email address', EMAIL_2);
        I.fillField('Your full name', NAME_2);
        I.fillField('Telephone number', TELEPHONE_2);
        I.submitForm();

        I.see(QUESTION_2);
        I.see(EMAIL_2);
        I.see(NAME_2);
        I.see(TELEPHONE_2);
    }
);

Scenario('A user can update fields on the question-about-existing-application page by clicking the Change button',
    function *(I) {
        I.checkOption('How to apply and the application process');
        I.submitForm();
        I.checkOption('Yes');
        I.submitForm();

        I.fillField('Your question', QUESTION_1);
        I.fillField('Applicant’s email address', EMAIL_1);
        I.fillField('Applicant’s full name', NAME_1);
        I.fillField('Telephone number', TELEPHONE_1);
        I.fillField('Application number', APPLICATION_NUMBER_1);
        I.submitForm();

        I.see(QUESTION_1);
        I.see(EMAIL_1);
        I.see(NAME_1);
        I.see(TELEPHONE_1);
        I.see(APPLICATION_NUMBER_1);

        I.click('#applicant-full-name-change');
        I.seeInCurrentUrl('edit');

        assert.equal(yield I.grabValueFrom('#question-body'), QUESTION_1);
        assert.equal(yield I.grabValueFrom('#applicant-full-name'), NAME_1);
        assert.equal(yield I.grabValueFrom('#applicant-email-address'), EMAIL_1);
        assert.equal(yield I.grabValueFrom('#phone-number'), TELEPHONE_1);
        assert.equal(yield I.grabValueFrom('#application-number'), APPLICATION_NUMBER_1);

        I.fillField('Your question', QUESTION_2);
        I.fillField('Applicant’s email address', EMAIL_2);
        I.fillField('Applicant’s full name', NAME_2);
        I.fillField('Telephone number', TELEPHONE_2);
        I.fillField('Application number', APPLICATION_NUMBER_2);
        I.submitForm();

        I.see(QUESTION_2);
        I.see(EMAIL_2);
        I.see(NAME_2);
        I.see(TELEPHONE_2);
        I.see(APPLICATION_NUMBER_2);
    }
);

Scenario('A user can update fields on the supporting-org-question page by clicking the Change button',
    function *(I) {
        I.checkOption('Helping someone else to apply');
        I.submitForm();
        I.checkOption('No');
        I.submitForm();

        I.fillField('Your question', QUESTION_1);
        I.fillField('Organisation name', ORGANISATION_1);
        I.fillField('Your email address', EMAIL_1);
        I.fillField('Your full name', NAME_1);
        I.fillField('Telephone number', TELEPHONE_1);
        I.submitForm();

        I.see(QUESTION_1);
        I.see(EMAIL_1);
        I.see(NAME_1);
        I.see(TELEPHONE_1);
        I.see(ORGANISATION_1);

        I.click('#organisation-name-change');
        I.seeInCurrentUrl('edit');

        assert.equal(yield I.grabValueFrom('#question-body'), QUESTION_1);
        assert.equal(yield I.grabValueFrom('#your-name'), NAME_1);
        assert.equal(yield I.grabValueFrom('#your-email-address'), EMAIL_1);
        assert.equal(yield I.grabValueFrom('#phone-number'), TELEPHONE_1);
        assert.equal(yield I.grabValueFrom('#organisation-name'), ORGANISATION_1);

        I.fillField('Your question', QUESTION_2);
        I.fillField('Organisation name', ORGANISATION_2);
        I.fillField('Your email address', EMAIL_2);
        I.fillField('Your full name', NAME_2);
        I.fillField('Telephone number', TELEPHONE_2);
        I.submitForm();

        I.see(QUESTION_2);
        I.see(EMAIL_2);
        I.see(NAME_2);
        I.see(TELEPHONE_2);
        I.see(ORGANISATION_2);
    }
);
