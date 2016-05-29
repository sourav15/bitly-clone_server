var mongo, async;
mongo = require('../core/mongo');
async = require('async');

module.exports = {
                  
                  createurl : function(incoming, callback) {
                               
                               function insertintomongo(callback) {
                               mongo.getclient(function(err,db) {
                                if(!err) {
                                 var collection;
                                 collection = db.collection('urlcollection');
                                 collection.insert(incoming, function(err, insertid) {
                                  db.close();
                                  if(err) {
                                   callback(err);
                                  } else {
                                    callback(err, insertid._id);
                                  }
                                 });
                                } else {
                                   callback('not connected to db');
                                }
                               });
                             }
                             async.waterfall([insertintomongo],function(err) {
                             if(err) {
                                callback(JSON.stringify({"status":"failed","message":err}));
                                } else {
                                callback(JSON.stringify({"status":"success"}));
                              }
                            });
                  }
                 }; 
