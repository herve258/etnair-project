import winston, { level } from "winston";

const myFormat = winston.format.printf(({ level, message, label, timestamp })=> {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize({all: true}),
        winston.format.label({label: 'label global'}),
        winston.format.timestamp(),
        myFormat
    ),
    transports: [ new winston.transports.Console() ]
});

export default logger;
