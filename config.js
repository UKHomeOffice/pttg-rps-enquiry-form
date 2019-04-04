module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || 'configuration_placeholder-6f54eeb5-e901-48aa-b2fb-285af60b8e97-b79aafb9-dbfe-4c62-a7ca-95bd93dc45b3',
        templates: {
            organisation: {
                general: process.env.NOTIFY_TEMPLATE_ORG_GENERAL || '4fdc0fd3-31f6-447c-9184-ddfcd5042f42',
                application: process.env.NOTIFY_TEMPLATE_ORG_APP || '6e20e03e-0fff-4202-be11-0478aa502b42'
            },
            individual: {
                general: process.env.NOTIFY_TEMPLATE_IND_GENERAL || '9867fbb4-3c0c-4377-a57c-be2929e2e2f6',
                application: process.env.NOTIFY_TEMPLATE_IND_APP || '85ea4e91-ecaf-4447-b6dc-1cfd245d8dbc'
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
        'cookie': {secure: process.env.USE_SECURE_COOKIE}
    },
    redis: {
        host: process.env.REDIS_SERVICE_HOST || process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_SERVICE_PORT || process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || null
    },
    gaTagId: process.env.GOOGLE_ANALYTICS_UA || 'UA-84737854-3',
    bearerToken: process.env.NOTIFY_BEARER_TOKEN,
    slackWebhookURL: process.env.SLACK_WEBHOOK_URL,
    slackChannelName: process.env.SLACK_CHANNEL_NAME,
    getCookies: false,
    getTerms: false
};
