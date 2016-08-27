var http = require('http');
var fs = require('fs');

var PORT = process.argv[2];
var src = process.argv[3];
var dst = "/Users/mnorelli/GA_WDI29/learnyounode/solutions/output";

function callback(request,response) {
  var inStreamObj = fs.createReadStream(src);
  var outStreamObj = fs.createWriteStream(dst);
  var response = src.pipe(dst);

}

var server = http.createServer(callback);
server.listen(PORT);