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
        res.locals.htmlLang = req.query.lang;
        res.cookie('lang', req.query.lang, {httpOnly: true});
    } else if (req.cookies.lang) {
        req.lang = req.cookies.lang;
        res.locals.htmlLang = req.cookies.lang;
    } else {
        res.locals.htmlLang = 'en';
    }
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '-1');
    res.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'self'; img-src 'self' www.google-analytics.com; font-src 'self' data:; script-src 'self' 'unsafe-inline' www.google-analytics.com ssl.google-analytics.com; frame-ancestors 'none'; connect-src www.google-analytics.com")
    return next();
});

module.exports = app;
