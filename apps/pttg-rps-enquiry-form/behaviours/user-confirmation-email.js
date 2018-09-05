const NotifyClient = require('notifications-node-client').NotifyClient;
const log = require('../../../logger');

module.exports = config => {
    const { apiKey, templateId } = config;

    if (!apiKey) {
        throw new Error('Missing Notify API Key');
    }

    if (!templateId) {
        throw new Error('Missing Notify Template ID');
    }

    const notifyClient = new NotifyClient(apiKey);

    return superclass => class extends superclass {
        async successHandler(req, res, callback) {

            try {
                const response = await notifyClient.sendEmail(templateId, req.sessionModel.get('enter-email-address'));
                log.info('User Confirmation Email sent successfully');
                log.debug(response);
            } catch (err) {
                const { statusCode, error } = err;
                const { errors } = error;

                const messages = errors.map(error => error.message).join();

                log.error(`User Confirmation Email failed to send. Got status code '${statusCode}' with messages '${messages}'`);
            }

            super.successHandler(req, res, callback);
        }
    };
};
