'use strict';

const contactReferenceNumberKey = 'contact-reference-number';
const hasExistingEnquiryKey = 'has-existing-enquiry';

const removeContactReferenceNumberFromRequest = req => {
    req.form.values[contactReferenceNumberKey] = '';
};

module.exports = superclass => class extends superclass {
    validate(req, res, callback) {
        const radioOptionSelected = req.form.values[hasExistingEnquiryKey];
        const hasExistingEnquiry = (radioOptionSelected === 'yes');

        const contactReferenceNumber = req.form.values[contactReferenceNumberKey];
        const isMissingContactReferenceNumber = !contactReferenceNumber;

        if (hasExistingEnquiry && isMissingContactReferenceNumber) {
            const validationError = {
                [contactReferenceNumberKey]: new this.ValidationError(contactReferenceNumberKey, {
                    type: 'required'
                })
            };
            return callback(validationError);
        }

        return super.validate(res, req, callback);
    }

    saveValues(req, res, callback) {
        const radioOptionSelected = req.form.values[hasExistingEnquiryKey];
        const noExistingEnquiry = (radioOptionSelected === 'no');

        if (noExistingEnquiry) {
            removeContactReferenceNumberFromRequest(req);
        }

        return super.saveValues(req, res, callback);
    }
};
