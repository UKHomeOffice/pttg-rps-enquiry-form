const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;

module.exports = {
    isSelected,
    yesSelected: fieldName => isSelected('yes', fieldName),
    noSelected: fieldName => isSelected('no', fieldName)
};

