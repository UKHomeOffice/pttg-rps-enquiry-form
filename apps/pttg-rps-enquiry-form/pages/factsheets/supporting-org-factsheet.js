const hasExistingApplication = require('../has-existing-application-fork');

module.exports = {
    path: '/supporting-org-factsheet',
    properties: {
        next: hasExistingApplication.path
    }
};
