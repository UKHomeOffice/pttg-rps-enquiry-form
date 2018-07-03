const SupportingDocumentsFactsheet = require('./factsheets/supporting-documents-factsheet');
const HowToApplyFactsheet = require('./factsheets/how-to-apply-factsheet');

const { isSelected } = require('./utils');

module.exports = {
    path: '/pre-submission-help',
    properties: {
        fields: ['pre-submission-help-choices'],
        forks: [{
            target: SupportingDocumentsFactsheet.path,
            condition: isSelected('supporting-documents', 'pre-submission-help-choices')
        }, {
            target: HowToApplyFactsheet.path,
            condition: isSelected('how-to-apply', 'pre-submission-help-choices')
        }]
    }
};
