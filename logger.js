const config = require('./config');
const winston = require('winston');

const loggerFactory = config => {
    const isProduction = config.env === 'production';

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' })
        ]
    });

    if (isProduction) {
        logger.add(new winston.transports.File({
            filename: 'error.log',
            level: 'error'
        }));

        logger.add(new winston.transports.File({
            filename: 'combined.log'
        }));
    } else {
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }

    return logger;
};

module.exports = loggerFactory(config);
