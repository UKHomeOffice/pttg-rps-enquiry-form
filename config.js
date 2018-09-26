module.exports = {
    env: process.env.NODE_ENV || 'development',
    loglevel: process.env.LOG_LEVEL || 'info',
    notify: {
        apiKey: process.env.NOTIFY_API_KEY || '',
        templates: {
            userConfirmation: process.env.NOTIFY_TEMPLATE_USER_CONFIRMATION || '',
            enquirySupport: process.env.NOTIFY_TEMPLATE_ENQUIRY_SUPPORT || ''
        },
        recipient: process.env.NOTIFY_RECIPIENT || ''
    },
    theme: 'govuk',
    routes: [
        './apps/pttg-rps-enquiry-form'
    ],
    'session': {
        'name': 'pttg-rps-enquiry-form.hof.sid'
    },
    redis: {
        host: process.env.REDIS_SERVICE_HOST || process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_SERVICE_PORT || process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || null
    }
};
