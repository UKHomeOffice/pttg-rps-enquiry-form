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
    // eslint-disable-next-line quotes
    res.setHeader("Cache-Control", "private, no-cache, no-store, must-revalidate");
    // eslint-disable-next-line quotes
    res.setHeader("Pragma", "no-cache");
    // eslint-disable-next-line quotes
    res.setHeader("Expires", "-1");
    return next();
});

module.exports = app;
