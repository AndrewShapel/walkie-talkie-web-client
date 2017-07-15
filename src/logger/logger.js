import bunyan from 'browser-bunyan';

const consoleFormattedStream = new bunyan.ConsoleFormattedStream();
const stdSerializers = bunyan.stdSerializers;

export default bunyan.createLogger({
  name: 'logger',
  streams: [{
    level: 'info',
    stream: consoleFormattedStream,
    serializers: stdSerializers,
  }, {
    level: 'error',
    stream: consoleFormattedStream,
    serializers: stdSerializers,
  }],
});
