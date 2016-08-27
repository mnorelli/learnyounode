var net = require('net');

var port = process.argv[2]

function content(){
  var date = new Date()
  var result = date.getFullYear()+"-"+(date.getMonth()+1).toString().replace(/^/,"0")+
                "-"+date.getDate()+" "+date.getHours()+
                ":"+date.getMinutes()+"\n"
  return result
}

function listener(socket){
  socket.end(content())
}

var server = net.createServer(listener)

server.listen(port)


