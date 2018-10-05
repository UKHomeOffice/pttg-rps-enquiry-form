const NotifyClient = require('notifications-node-client').NotifyClient;
const log = require('../../../logger');

const getValue = (req, field) => {
    const value = req.sessionModel.get(field);
    const key = `fields.${field}.options.${value}.label`;
    return req.translate(key);
};

const warnUser = (env, msg) => {
    if (env === 'production') throw new Error(msg);
    log.warn(msg);
};

const getPersonalisationFromModel = (req) => {
    const p = req.sessionModel.attributes;
    // remove potentially scary entries in the session model:
    delete p['steps'];
    delete p['csrf-secret'];

    // translate option groups
    if (p['your-question-option']) {
        p['your-question-option-translate'] = getValue(req, 'your-question-option');
    }

    log.info('Possible keys: ' + Object.keys(p).join(', '));
    return {personalisation: p};
};

module.exports = config => {
    const { apiKey, templateId, recipient, env } = config;

    if (!apiKey) warnUser(env, 'Missing Notify API Key');
    if (!templateId) warnUser(env, 'Missing Notify Template ID');

    const notifyClient = new NotifyClient(apiKey);

    return superclass => class extends superclass {
        async successHandler(req, res, callback) {
            try {
                const response = await notifyClient.sendEmail(
                    templateId,
                    recipient || req.sessionModel.get('email-address'),
                    getPersonalisationFromModel(req)
                );

                log.info('Support Enquiry Email sent successfully');
                log.debug(response);
            } catch (err) {
                const { statusCode, error } = err;
                const { errors } = error;

                const messages = errors.map(error => error.message).join();

                if (process.env.NODE_ENV !== 'development') {
                    res.json({
                        error: messages,
                        availKeys: Object.keys(req.sessionModel.attributes)
                    });
                }

                log.error(`Support Enquiry Email failed to send. Got status code '${statusCode}' with messages '${messages}'`);
            }

            super.successHandler(req, res, callback);
        }
    };
};
