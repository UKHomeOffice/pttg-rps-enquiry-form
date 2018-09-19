const summaryPage = require('./summary');

module.exports = {
    path: '/application-details',
    properties: {
        next: summaryPage.path
    }
};
