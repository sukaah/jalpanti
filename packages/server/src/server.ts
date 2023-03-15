import io from './core/io'
import logger from './utils/logger'

function close(){
 logger.info('connection closed')
}

function connection(){
 logger.info('New client connected')
}

export default (data:{port:number,logLevel:'info' | 'error'})=>{
          io.listen(data.port)
          logger.info('Listener connected to port:',data.port)
          io.close(close)
          io.on('connection',connection)
}