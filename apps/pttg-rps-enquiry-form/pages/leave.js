module.exports = {
    path: '/leave',
    properties: {
        behaviours: [
            require('../behaviours/clear-session'),
            'complete'
        ],
        backLink: false
    }
};
