import Container from "./styles/LandingPageStyle"
import React, {Component} from "react";
import io from "socket.io-client";

var socket = io('http://localhost:8000');
socket.on('connect', function(){
    console.log("Connected to server side");
});

class LandingPage extends Component {
    state = {
        joinCode: "",
    }
    saveInputToState = e => {
        this.setState({
            joinCode: e.target.value,
        });
    }

    sendCode = () => {
        let code = this.state.joinCode;
        
        socket.emit("Join request", parseInt(code));
        socket.once("Join confirmed-"+code, function(confirmed) {
            if (confirmed) {
                console.log("Confirmed!");
            } else {
                console.log("Denied!");
            }
        });
    }

    preventSubmit = e => {
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <Container className="">
                    <h1 className="grey-text text-lighten-4">
                        Study Session
                    </h1>
                    <form onSubmit={this.preventSubmit}>
                        <div className="row input-field">
                            <input id="join_code" type="number" value={this.state.joinCode} className="validate blue-text text-lighten-3" onChange={this.saveInputToState}/>
                            <label htmlFor="join_code" className="green-text text-lighten-3 active" >
                                Enter a session code
                            </label>
                        </div>
                    </form>
                    <button className="btn teal lighten-1 waves-effect waves-light" onClick={this.sendCode}>
                        Join
                    </button>
                    <div id="or-container"><p className="grey-text text-lighten-4">OR</p></div>
                    <p className="green-text text-lighten-3 active"><strong>Start a new session</strong></p>
                    <button className="btn teal lighten-1 waves-effect waves-light">
                        Create
                    </button>
                </Container>
            </div>
        )
    }
}

export default LandingPage;