const ContactInformationPage = require('../contact-information');

module.exports = {
    path: '/decision-factsheet',
    properties: {
        next: ContactInformationPage.path
    }
};
