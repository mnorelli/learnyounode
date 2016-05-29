var fs = require('fs');
var path = require('path');

var dir = process.argv[2]
var ext = process.argv[3]

function filter(dir,ext,callback) {
  var result = [];
  fs.readdir(dir,function(err,list){
  if (err) return callback(err); // early return  
  for (i=0;i<list.length;i++) {
    if (list[i].split('.')[1] == ext) {
      result.push(list[i]);
    }
  }
  callback(null,result)
  })
}

module.exports = filter;
