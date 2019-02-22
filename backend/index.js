var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var Session = require("./Session");

app.get("/", function(req, res){
    res.send("Hey buddy");
});

io.on("connection", function(socket){
    socket.once("Join request", function(code){
        let session = Session.getSessionFromCode(code);
        if (session == null) {
            session = new Session(code);
        }
        io.emit("Join confirmed-"+code, session.people.length < 4);
        session.addPerson("person");
    });
});


http.listen(8000, function(){
    console.log("Listening on port 8000");
});