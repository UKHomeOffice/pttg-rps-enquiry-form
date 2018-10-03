const hasExistingApplication = require('../has-existing-application-fork');

module.exports = {
    path: '/how-to-apply-factsheet',
    properties: {
        next: hasExistingApplication.path
    }
};
