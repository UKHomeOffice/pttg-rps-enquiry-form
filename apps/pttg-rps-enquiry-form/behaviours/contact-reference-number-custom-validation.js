'use strict';

module.exports = config => {
    const { existingEnquiryField, contactReferenceNumberField } = config;

    if (!existingEnquiryField) {
        throw new Error('Missing required config `existingEnquiryField`. This should be the key of the field.');
    }

    if (!contactReferenceNumberField) {
        throw new Error('Missing required config `contactReferenceNumberField`. This should be the key of the field.');
    }

    const removeContactReferenceNumberFromRequest = req => {
        req.form.values[contactReferenceNumberField] = '';
    };

    return superclass => class extends superclass {
        validate(req, res, callback) {
            const radioOptionSelected = req.form.values[existingEnquiryField];
            const hasExistingEnquiry = (radioOptionSelected === 'yes');

            const contactReferenceNumber = req.form.values[contactReferenceNumberField];
            const isMissingContactReferenceNumber = !contactReferenceNumber;

            if (hasExistingEnquiry && isMissingContactReferenceNumber) {
                const error = this.contactReferenceNumberRequiredError();
                return callback(error);
            }

            return super.validate(res, req, callback);
        }

        contactReferenceNumberRequiredError() {
            return {
                [contactReferenceNumberField]: new this.ValidationError(contactReferenceNumberField, {
                    type: 'required'
                })
            };
        }

        saveValues(req, res, callback) {
            const radioOptionSelected = req.form.values[existingEnquiryField];
            const noExistingEnquiry = (radioOptionSelected === 'no');

            if (noExistingEnquiry) {
                removeContactReferenceNumberFromRequest(req);
            }

            return super.saveValues(req, res, callback);
        }
    };
};
