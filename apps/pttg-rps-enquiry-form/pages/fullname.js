const ContactInformationPage = require('./contact-information');

module.exports = {
    path: '/fullname',
    properties: {
        fields: ['enter-fullname'],
        next: ContactInformationPage.path
    }
};
