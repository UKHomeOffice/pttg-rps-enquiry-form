const { yesSelected, noSelected } = require('./utils');
const LiveAppOrDecisionPage = require('./decision-made');
const PreSubmissionHelpPage = require('./pre-submission-help');

module.exports = {
    path: '/have-submitted-application',
    properties: {
        fields: ['submitted-application'],
        forks: [{
            target: LiveAppOrDecisionPage.path,
            condition: yesSelected('submitted-application')
        }, {
            target: PreSubmissionHelpPage.path,
            condition: noSelected('submitted-application')
        }]
    }
};
