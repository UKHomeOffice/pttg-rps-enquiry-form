'use strict';

const HaveExistingEnquiryPage = require('./have-existing-enquiry');

module.exports = {
    path: '/start',
    properties: {
        next: HaveExistingEnquiryPage.path
    }
};
