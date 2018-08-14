const { isSelected } = require('./utils');
const SupportingDocumentsFactsheet = require('./factsheets/eligibility-factsheet');
const HowToApplyFactsheet = require('./factsheets/how-to-apply-factsheet');
const DecisionFactsheet = require('./factsheets/decision-factsheet');
const LiveApplicationFactsheet = require('./factsheets/live-application-factsheet');
const EnquiryForm = require('./enquiry');

module.exports = {
    path: '/what-is-your-enquiry',
    properties: {
        fields: ['your-enquiry-option'],
        forks: [{
            target: SupportingDocumentsFactsheet.path,
            condition: isSelected('eligibility', 'your-enquiry-option')
        },
        {
            target: HowToApplyFactsheet.path,
            condition: isSelected('how-to-apply', 'your-enquiry-option')
        },
        {
            target: LiveApplicationFactsheet.path,
            condition: isSelected('change-or-withdraw', 'your-enquiry-option')
        },
        {
            target: DecisionFactsheet.path,
            condition: isSelected('application-result', 'your-enquiry-option')
        },
        {
            target: EnquiryForm.path,
            condition: isSelected('enquiry-form', 'your-enquiry-option')
        }]
    }
};
