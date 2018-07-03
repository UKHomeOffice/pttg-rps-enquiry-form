const DateOfBirthPage = require('./date-of-birth');

module.exports = {
    path: '/fullname',
    properties: {
        fields: ['enter-fullname'],
        next: DateOfBirthPage.path
    }
};
