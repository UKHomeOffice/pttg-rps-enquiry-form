const NotifyClient = require('notifications-node-client').NotifyClient;
const log = require('../../../logger');

const getValue = (req, field) => {
    const value = req.sessionModel.get(field);
    const key = `fields.${field}.options.${value}.emailSubject`;
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

    const DEFAULT_TTL = 3;

    const notifyClient = new NotifyClient(apiKey);

    if (!apiKey) warnUser(env, 'Missing Notify API Key');

    const sendMessage = (templateId, recipient, personalisation, ttl, cb) => {
        notifyClient.sendEmail(
            templateId,
            recipient,
            personalisation
        ).then(response => {
            log.info('Support Enquiry Email sent successfully');
            log.debug(response);
            return cb(null, response);
        }).catch(err => {
            if (ttl-- > 0) {
                log.warn(`Retrying send -- ttl now ${ttl}`);
                return sendMessage(templateId, recipient, personalisation, ttl, cb);
            }
            log.error('Failure sending');
            return cb(err, null);
        });
    };


    return superclass => class extends superclass {
        upstreamSuccessHandler (...args) {
            super.successHandler(...args);
        }
        successHandler (req, res, next) {
            const that = this;
            sendMessage(
                getTemplateId(req, templates),
                recipient,
                getPersonalisationFromModel(req),
                DEFAULT_TTL,
                (err) => {
                    if (err) {
                        log.error(`Support Enquiry Email failed to send: ${err.name} - ${err.message}`);
                        return next(new Error('NOTIFY_ERROR'), req, res);
                    }
                    return that.upstreamSuccessHandler(req, res, next);
                });
        }

    };
};
