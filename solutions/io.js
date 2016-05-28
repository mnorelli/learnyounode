var fs = require('fs')

var file = fs.readFileSync(process.argv[2])
var buf = new Buffer(file)
var splits = buf.toString().split('\n')
console.log(splits.length-1)
return splits.length-1
