import liveServer from 'live-server';

const { PORT, OPEN } = process.env;

const params = {
  host: 'localhost',
  port: PORT || 3000,
  open: OPEN || false
}

liveServer.start(params);