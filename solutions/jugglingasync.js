var http = require('http')
var bl = require('bl')

var url =[]
for (i=2;i<5;i++){
  url.push(process.argv[i])
}

results = [];
function callback(i, response){
  response.setEncoding('utf8');
  response.pipe(bl(function(err,data){
    var stream = data.toString();
    results[i] = stream;
    if (results.length == 3) {   // wait until all the responses have come back
      results.forEach(function(v,i){
        console.log(v);
      })
    }
  }))
  response.on('error',console.log);
};



for (var i=0;i<3;i++){
  http.get(url[i], callback.bind(null, i));   // this aligns i to specific callback calls
}

// Sam recommends using "let" in the iterator for the function
// at bottom because it sets "block-level scope".  With that, 
// it's easy to align i to specific results