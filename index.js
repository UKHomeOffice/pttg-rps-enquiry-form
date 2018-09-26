const hof = require('hof');

const settings = require('./config');

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

module.exports = hof(settings);
