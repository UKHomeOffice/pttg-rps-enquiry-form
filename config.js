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
    }
};
