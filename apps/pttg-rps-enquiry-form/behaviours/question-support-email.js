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

const getTemplateId = (req, templates) => {
    const stepsEncountered = req.sessionModel.get('steps');
    const templateForStep = {
        '/supporting-org-question-about-application': templates.organisation.application,
        '/supporting-org-question': templates.organisation.general,
        '/question-about-existing-application': templates.individual.application,
        '/question': templates.individual.general
    };

    for (const step in templateForStep) {
        if (stepsEncountered.includes(step)) return templateForStep[step];
    }
    return undefined;
};

module.exports = (config) => {


    const { apiKey, recipient, env, templates } = config;

    if (!apiKey) warnUser(env, 'Missing Notify API Key');

    const notifyClient = new NotifyClient(apiKey);

    return superclass => class extends superclass {
        async successHandler(req, res, callback) {
            try {
                const templateId = getTemplateId(req, templates);
                const response = await notifyClient.sendEmail(
                    templateId,
                    recipient || req.sessionModel.get('email-address'),
                    getPersonalisationFromModel(req)
                );

                log.info('Support Enquiry Email sent successfully');
                log.debug(response);
            } catch (err) {
                if (!err.statusCode) throw err;
                const { statusCode, error } = err;
                const { errors } = error;

                const messages = errors.map(error => error.message).join();

                if (process.env.NODE_ENV === 'development') {
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
