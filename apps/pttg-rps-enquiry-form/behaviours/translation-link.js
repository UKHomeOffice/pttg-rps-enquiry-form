module.exports = superclass => class extends superclass {
    configure(req, res, next) {
        super.configure(req, res, err => {
            res.locals.startPage = true;
            next(err);
        });
    }
};
