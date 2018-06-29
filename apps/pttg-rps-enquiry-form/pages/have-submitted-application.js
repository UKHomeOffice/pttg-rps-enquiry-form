'use strict';

const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
const noSelected = fieldName => isSelected('no', fieldName);
const yesSelected = fieldName => isSelected('yes', fieldName);

module.exports = {
    path: '/have-submitted-application',
    properties: {
        fields: ['submitted-application'],
        forks: [{
          target: '/liveapp-or-decision',
          condition: yesSelected('submitted-application')
        }, {
          target: '/pre-submission-help',
          condition: noSelected('submitted-application')
        }]
    }
};
