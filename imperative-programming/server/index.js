const liveServer = require('live-server');
const { PORT, OPEN } = process.env;

liveServer.start({
  host: 'localhost',
  port: PORT || 3000,
  open: `/${OPEN}` || false,
});
