module.exports = superclass => class extends superclass {

    getValues(req, res, next) {
        req.sessionModel.reset();
        super.getValues(req, res, next);
    }
};
