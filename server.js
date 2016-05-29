var express = require('express');
bodyParser = require("body-parser");
require('express-namespace');
cors = require('cors');

var app;
app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

require('./routes/routes')(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
module.exports = app;

