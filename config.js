/* eslint no-process-env: 0 */

const env = {
    asString: (varName, defaultValue) => {
        return process.env[varName] || defaultValue;
    },
    asBoolean: (varName, defaultValue) => {
        const value = process.env[varName];
        if (!value) {
            return defaultValue;
        }

        switch (value.toUpperCase()) {
        case 'TRUE': return true;
        case 'FALSE': return false;
        default: return defaultValue;
        }
    }
};

module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || '',
        templates: {
            userConfirmation: process.env.NOTIFY_TEMPLATE_USER_CONFIRMATION || '',
            enquirySupport: process.env.NOTIFY_TEMPLATE_ENQUIRY_SUPPORT || ''
        }
    }
};
