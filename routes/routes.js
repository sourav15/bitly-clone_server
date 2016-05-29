   module.exports = function(app) {
    app.namespace('/api/public',function(){ 
     app.post('/createurl', function(req, res) {
      var urlhelper = require('../helpers/urlhelper');
      urlhelper.createurl(req.body, function(response) {
      return res.send(response);
      });
     });
    });
   }       
