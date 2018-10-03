const hasExistingApplication = require('../has-existing-application-fork');

module.exports = {
    path: '/live-application-factsheet',
    properties: {
        next: hasExistingApplication.path
    }
};
