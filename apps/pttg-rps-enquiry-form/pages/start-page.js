const WhatIsYourQuestionPage = require('./what-is-your-question');

module.exports = {
    path: '/start',
    properties: {
        next: WhatIsYourQuestionPage.path
    }
};
