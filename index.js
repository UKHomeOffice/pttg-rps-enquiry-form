const hof = require('hof');
const settings = require('./config');
const notifyMessages = require('./apps/pttg-rps-enquiry-form/behaviours/notify-delivery-messages');

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

const app = hof(settings);

//Endpoint for Notify delivery receipts
app.use('/notify-messages', notifyMessages);

app.use((req, res, next) => {
    if (settings.gaCrossGovId) {
        res.locals.gaCrossGovId = settings.gaCrossGovId;
    }
    return next();
});

app.use((req, res, next) => {
    if (req.query.lang) {
        req.lang = req.query.lang;
        res.cookie('lang', req.query.lang, {httpOnly: true});
    } else if (req.cookies.lang) {
        req.lang = req.cookies.lang;
    }
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '-1');
    return next();
});

module.exports = app;
