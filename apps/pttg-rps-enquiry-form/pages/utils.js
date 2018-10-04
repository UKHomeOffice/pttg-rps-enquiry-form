const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;

module.exports = {
    isSelected
};
