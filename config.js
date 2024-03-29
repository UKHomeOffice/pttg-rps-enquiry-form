module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || 'configuration_placeholder-6f54eeb5-e901-48aa-b2fb-285af60b8e97-b79aafb9-dbfe-4c62-a7ca-95bd93dc45b3',
        templates: {
            organisation: {
                general: process.env.NOTIFY_TEMPLATE_ORG_GENERAL || '1c8afe2c-666a-47d6-a58f-5b9ddda54f68',
                application: process.env.NOTIFY_TEMPLATE_ORG_APP || 'd1a18175-a095-43f5-a900-553b3db42026'
            },
            individual: {
                general: process.env.NOTIFY_TEMPLATE_IND_GENERAL || '9867fbb4-3c0c-4377-a57c-be2929e2e2f6',
                application: process.env.NOTIFY_TEMPLATE_IND_APP || '1b70cd6d-7f2c-4d3a-9e00-0525603b2876'
            }
        },
        recipient: process.env.NOTIFY_RECIPIENT || 'simulate-delivered@notifications.service.gov.uk'
    },
    theme: 'govuk',
    routes: [
        './apps/pttg-rps-enquiry-form'
    ],
    'session': {
        'name': 'pttg-rps-enquiry-form.hof.sid',
        // NODE_ENV is set by drone during deployments. Leave unset or not equal to 'production' for local develompent
        // so that cookie (and therefore session) works over HTTP
        cookie: {secure: (process.env.NODE_ENV === 'production')}
    },
    redis: {
        host: process.env.REDIS_SERVICE_HOST || process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_SERVICE_PORT || process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || null
    },
    gaTagId: process.env.GOOGLE_ANALYTICS_UA || 'UA-84737854-3',
    gaCrossGovId: process.env.GOOGLE_ANALYTICS_SECONDARY_UA || 'UA-145652997-1',
    bearerToken: process.env.NOTIFY_BEARER_TOKEN,
    slackWebhookURL: process.env.SLACK_WEBHOOK_URL,
    slackChannelName: process.env.SLACK_CHANNEL_NAME,
    getCookies: false,
    getTerms: false
};
