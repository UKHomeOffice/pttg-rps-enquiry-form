const questionPage = require('../question');

module.exports = {
    path: '/decision-factsheet',
    properties: {
        next: questionPage.path
    }
};
