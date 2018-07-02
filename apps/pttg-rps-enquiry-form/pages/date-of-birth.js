const ContactInformationPage = require('./contact-information');

module.exports = {
    path: '/date-of-birth',
    properties: {
        fields: ['enter-date-of-birth'],
        next: ContactInformationPage.path
    }
};

