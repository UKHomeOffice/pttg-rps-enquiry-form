const questionPage = require('../question');

module.exports = {
    path: '/about-the-scheme',
    properties: {
        next: questionPage.path
    }
};
