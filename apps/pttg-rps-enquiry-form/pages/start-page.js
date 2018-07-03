const HaveSubmittedApplicationPage = require('./have-submitted-application');

module.exports = {
    path: '/start',
    properties: {
        next: HaveSubmittedApplicationPage.path
    }
};
