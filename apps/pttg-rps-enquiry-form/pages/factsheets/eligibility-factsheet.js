const ContactInformationPage = require('../contact-information');

module.exports = {
    path: '/eligibility-factsheet',
    properties: {
        next: ContactInformationPage.path
    }
};
