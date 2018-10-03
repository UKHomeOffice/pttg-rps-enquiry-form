const steps = require('../../');

Feature('Happy path');

Before((I, startPage) => {
    I.visitPage(startPage, steps);
});


Scenario('An enquiry can be completed end-to-end', (I) => {
    I.completeToStep('/pttg-rps-enquiry-form/confirm', {
        'question-body': 'All human beings are born free and equal in dignity and rights.',
        'name': 'Joe Bloggs',
        'email-address': 'test@example.com',
        'phone-number': '+441144960123',
        'existing-application': 'no'
    });
});

Scenario('An enquiry about an application can be completed end-to-end', (I) => {
    I.completeToStep('/pttg-rps-enquiry-form/confirm', {
        'question-body': 'All human beings are born free and equal in dignity and rights.',
        'application-number': '3434-0000-0000-0001',
        'name': 'Joe Bloggs',
        'email-address': 'test@example.com',
        'applicant-full-name': 'Jane Bloggs',
        'nationality': 'Sweden',
        'phone-number': '+441144960123',
        'date-of-birth-day': '01',
        'date-of-birth-month': '01',
        'date-of-birth-year': '1970'
    });
});
