const questionPage = require('../question');

module.exports = {
    path: '/eligibility-factsheet',
    properties: {
        next: questionPage.path
    }
};
