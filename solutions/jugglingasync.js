var http = require('http')
var bl = require('bl')

var url =[]
for (i=2;i<5;i++){
  url.push(process.argv[i])
}

function callback(response){
  response.setEncoding('utf8');
  response.pipe(bl(function(err,data){
    var stream = data.toString();
    console.log(stream);
  }))
  response.on('error',console.log);
};

for (i=0;i<3;i++){
  http.get(url[i], callback);
}