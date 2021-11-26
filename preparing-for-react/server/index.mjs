import liveServer from 'live-server';

console.log({port: process.env.PORT});
console.log({open: process.env.OPEN});

const params = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  open: process.env.OPEN || false
}

liveServer.start(params);