import winston from 'winston'

export interface ILOG_LEVELS{
    info:'info',
    error:'error'
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: 'combined.log' })
  ]
});
export default {
      info:logger.info.bind(logger),
      error:logger.error.bind(logger)
}