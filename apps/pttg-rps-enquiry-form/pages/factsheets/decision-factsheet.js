const hasExistingApplication = require('../has-existing-application-fork');

module.exports = {
    path: '/decision-factsheet',
    properties: {
        next: hasExistingApplication.path
    }
};
