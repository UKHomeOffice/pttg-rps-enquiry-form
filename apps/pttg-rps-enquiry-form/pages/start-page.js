const WhatIsYourQuestionPage = require('./what-is-your-question');

module.exports = {
    path: '/start',
    properties: {
        behaviours: require('../behaviours/translation-link'),
        next: WhatIsYourQuestionPage.path
    }
};
