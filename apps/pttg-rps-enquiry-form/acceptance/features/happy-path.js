const steps = require('../../');

Feature('Happy path');

Before((I) => {
    I.clearCookie();
    I.visitPage('start', steps);
});


xScenario('An enquiry can be completed end-to-end', (I) => {
    I.completeToStep('/confirm', {
        'question-body': 'All human beings are born free and equal in dignity and rights.',
        'your-name': 'Joe Bloggs',
        'your-email-address': 'test@example.com',
        'phone-number': '+441144960123',
        'existing-application': 'no'
    });
});

xScenario('An enquiry about an application can be completed end-to-end', (I) => {
    I.completeToStep('/confirm', {
        'question-body': 'All human beings are born free and equal in dignity and rights.',
        'existing-application': 'yes',
        'application-number': '3434-0000-0000-0001',
        'applicant-email-address': 'test2@example.com',
        'applicant-full-name': 'Janine Butcher',
        'nationality': 'Sweden',
        'phone-number': '+44-114496 0123',
        'date-of-birth-day': '01',
        'date-of-birth-month': '01',
        'date-of-birth-year': '1970'
    });
});
