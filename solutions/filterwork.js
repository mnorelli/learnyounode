var filter = require('./filterlsmod');

var dir = process.argv[2]
var ext = process.argv[3]

var result = filter(dir,ext,function(err,data) {
  if (err) console.log("error:",err)
  else {
    data.forEach(function(r){
      console.log(r)
    })
  }
});