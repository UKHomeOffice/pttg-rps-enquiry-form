/* eslint no-process-env: 0 */

'use strict';

module.exports = {
    email: {
        transport: 'smtp',
        transportOptions: {
            host: process.env.SMTP_SERVER || 'localhost',
            port: '1025',
            secure: process.env.SMTP_SECURE || false,
            auth: {
                user: process.env.SMTP_USERNAME || '',
                pass: process.env.SMTP_PASSWORD || ''
            }
        }
    }
};
