const { yesSelected } = require('../pages/utils');

module.exports = SuperClass => class extends SuperClass {
    locals(req, res) {
        const locals = super.locals(req, res);

        locals['has-submitted-application'] = yesSelected('submitted-application')(req);

        return locals;
    }
};
