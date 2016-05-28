var fs = require('fs');
var path = require('path');

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir,function(err,list){
  if (err) throw err;
  for (i=0;i<list.length;i++) {
    if (list[i].split('.')[1] == ext) console.log(list[i])
  }
  })

