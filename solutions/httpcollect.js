var http = require('http')
var bl = require('bl')

var url = process.argv[2]

function callback(response){
  response.setEncoding('utf8');
  response.pipe(bl(function(err,data){
    var stream = data.toString();
    console.log(stream);
    console.log(stream.length);
  }))
  response.on('error',console.log);
};

http.get(url, callback);