var MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

module.exports = superclass => class extends superclass {
    configure(req, res, next) {
        super.configure(req, res, err => {
            console.log('in slack alert');
            slack.alert('detail of failed message');
            next(err);
        });
    }
};

