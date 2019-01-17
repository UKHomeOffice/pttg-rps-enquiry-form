const hof = require('hof');
const settings = require('./config');

var MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

const app = hof(settings);

app.use('/notify-messages', function (req, res) {

    if (req.method == 'POST') {
        if (req.headers.authorization == settings.bearerToken) {
            if (req.body.status !== 'delivered') {
                slack.alert('Status: ' + req.body.status + ' Id: ' + req.body.id);
                res.status(200).end();
            }
        } else {
            res.status(405).end();
        }
    } else {
        res.status(405).end();
    }
});

module.exports = app;
