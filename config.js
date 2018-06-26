/* eslint no-process-env: 0 */

'use strict';

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
    email: {
        transport: 'smtp',
        transportOptions: {
            host: env.asString('SMTP_SERVER', 'localhost'),
            port: env.asString('SMTP_PORT', '25'),
            secure: env.asBoolean('SMTP_SECURE', true),
            auth: {
                user: env.asString('SMTP_USERNAME', ''),
                pass: env.asString('SMTP_PASSWORD', '')
            }
        },
        from: 'enquiry-confirmation@homeoffice.gov.uk'
    }
};
