'use strict';

const DecisionFactsheet = require('./factsheets/decision-factsheet');
const LiveApplicationFactsheet = require('./factsheets/live-application-factsheet');

const { noSelected } = require('./utils');

module.exports = {
    path: '/liveapp-or-decision',
    properties: {
        fields: ['liveapp-or-decision'],
        next: LiveApplicationFactsheet.path,
        forks: [{
            target: DecisionFactsheet.path,
            condition: noSelected('liveapp-or-decision')
        }]
    }
};
