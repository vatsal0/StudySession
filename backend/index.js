var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var Session = require("./Session");
new Session(123456);
app.get("/", function(req, res){
    res.send("Hey buddy");
});

io.on("connection", function(socket){
    socket.on("Join request", (code, func) => {
        let session = Session.getSessionFromCode(code);
        console.log(session);
        if (session == "none") {
            func(false);
        } else {   
            func(session.getNumberOfPeople() < 2);
        }
    });
    socket.on("Set name", (id, code, name) => {
        if (code) {
            let session = Session.getSessionFromCode(code);
            session.updatePerson(id, name);
            let names = Object.keys(session.people).map((key) => {return session.getPerson(key)});
            socket.join(toString(code));
        }
    })
});


http.listen(8000, function(){
    console.log("Listening on port 8000");
});