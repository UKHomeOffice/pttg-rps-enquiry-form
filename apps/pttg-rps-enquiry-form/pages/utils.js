const isSelected = (choice, fieldName) => req => req.sessionModel.get(fieldName) === choice;
const isOrganisation = () => isSelected('supporting-organisation', 'your-question-option');
module.exports = {
    isSelected,
    isOrganisation
};

