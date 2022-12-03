var http = require('http');
http.createServer(function(req,res){
    res.write("hello this is the first js file");
    res.end();
}).listen(8080);