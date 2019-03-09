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
        if (session == "none") {
            func(false);
        } else {   
            func(session.getNumberOfPeople() < 3);
        }
    });
    socket.on("Set name", (id, code, name) => {
        if (code) {
            let session = Session.getSessionFromCode(code);
            session.updatePerson(id, name);
            //let names = Object.keys(session.people).map((key) => {return session.getPerson(key)});
            socket.to(toString(code)).emit("Member joined", name);
            socket.join(toString(code));
            console.log(session);
        }
    })
    socket.on("Get session info", (code, func)=> {
        
    })
    socket.on("Get members", (code, func) => {
        func(Session.getSessionFromCode(code).people);
    })
    socket.on("disconnect", () => {
        Session.disconnectPerson(socket.id);
    })
});


http.listen(8000, function(){
    console.log("Listening on port 8000");
});