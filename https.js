require('dotenv').config();

const TLS_OPTIONS = {
  cert: process.env.TLS_CERT,
  key: process.env.TLS_KEY,
};

require('https')
  .createServer(TLS_OPTIONS, (_, res) => res.end('Hello, HTTPS World!'))
  .listen(process.env.TLS_PORT, process.env.HOSTNAME, () => {
    console.log(
      `server at https://${process.env.HOSTNAME}:${process.env.TLS_PORT}/ (Press CTRL+C to quit)`
    );
  });
