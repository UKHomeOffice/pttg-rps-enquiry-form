const HasExistingApplication = require('./has-existing-application-fork');

module.exports = {
    path: '/what-is-your-question',
    properties: {
        fields: ['your-question-option'],
        next: HasExistingApplication.path
    }
};
