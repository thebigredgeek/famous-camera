var connect = require('connect')
  , serveStatic = require('serve-static')
  , app = connect();

app
  .use(serveStatic(__dirname + '/'))
  .listen(8080);
