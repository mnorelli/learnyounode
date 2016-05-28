var fs = require('fs')
var file = fs.readFile(process.argv[2],function(err,data){
  if (err) throw err;
  var buf = new Buffer(data)
  var splits = buf.toString().split('\n')
  console.log(splits.length-1)
})
