const hasExistingApplication = require('../has-existing-application-fork');

module.exports = {
    path: '/about-the-scheme',
    properties: {
        next: hasExistingApplication.path
    }
};
