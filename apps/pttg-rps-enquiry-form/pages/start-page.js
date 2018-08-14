const WhatIsYourEnquiryPage = require('./what-is-your-enquiry');

module.exports = {
    path: '/start',
    properties: {
        next: WhatIsYourEnquiryPage.path
    }
};
