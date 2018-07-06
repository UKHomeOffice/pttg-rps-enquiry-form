const DecisionFactsheet = require('./factsheets/decision-factsheet');
const LiveApplicationFactsheet = require('./factsheets/live-application-factsheet');

const { noSelected } = require('./utils');

module.exports = {
    path: '/decision-made',
    properties: {
        fields: ['decision-made'],
        next: DecisionFactsheet.path,
        forks: [{
            target: LiveApplicationFactsheet.path,
            condition: noSelected('decision-made')
        }]
    }
};
