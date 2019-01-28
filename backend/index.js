const http = require("http");

http.createServer(function(req,res) {
    console.log("we running boys");
    res.end();
}).listen(8080);