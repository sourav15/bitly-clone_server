var mongoclient;
var url = 'mongodb://localhost:27017/bitlyserver';
mongoclient = require('mongodb').MongoClient;

module.exports = {
                   getclient: function(callback) {
                                       mongoclient.connect(url, function(err, db){
                                       callback(err, db);
                                       });
                              }
                 };
