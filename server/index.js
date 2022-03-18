const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log('listening on 8080');
})

app.use('/', expressStaticGzip('public'));
//app.use(express.static('public'))