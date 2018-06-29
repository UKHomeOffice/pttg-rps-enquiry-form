'use strict';

const HaveExistingEnquiryPage = require('./have-existing-enquiry');

module.exports = {
    path: '/start-now',
    properties: {
        next: HaveExistingEnquiryPage.path
    }
};
