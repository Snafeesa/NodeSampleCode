var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello  World');

}).listen(8081);

console.log('server is running on the port');
