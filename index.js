const app = require('./app');
const http = require('http');

const server = http.createServer(app);


const PORT = 3007
  server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
