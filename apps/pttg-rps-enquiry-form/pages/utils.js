'use strict';

const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;

module.exports = {
    yesSelected: fieldName => isSelected('yes', fieldName),
    noSelected: fieldName => isSelected('no', fieldName)
};

