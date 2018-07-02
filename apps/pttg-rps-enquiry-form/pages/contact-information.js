'use strict';

const { yesSelected } = require('./utils');
const ContactMethodPreference = require('./contact-method-preference');
const UniqueReferenceNumberPage = require('./unique-reference-number');

module.exports = {
    path: '/contact-information',
    properties: {
        fields: ['enter-email', 'enter-phone-number'],
        forks: [{
            target: ContactMethodPreference.path,
            condition: (req) => (!!req.sessionModel.get('enter-phone-number'))
        }, {
            target: UniqueReferenceNumberPage.path,
            condition: (req) => {
                return yesSelected('submitted-application') && (!req.sessionModel.get('enter-phone-number'));
            }
        }]
    }
};
