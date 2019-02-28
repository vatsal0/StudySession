import Container from "./styles/LandingPageStyle"
import React, {Component} from "react";
import Panel from "./styles/Panel";
import ErrorPanel from "./styles/ErrorPanel";
import router from "next/router";


class LandingPage extends Component {
    state = {
        joinCode: 0,
        joined: false,
        userName: "",
        showInvalidCode: false,
        showInvalidName: false,
        sessionCode: undefined,
    }
    saveInputToState = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    sendCode = () => {
        console.log("Sending code");
        let code = parseInt(this.state.joinCode);
        let obj = this;
        if (!isNaN(code) && Math.log10(code) >= 5 && Math.log10(code) < 6) {
            console.log("Sending join request");
            this.props.socket.emit("Join request", code, (confirmed) => {
                if (confirmed) {
                    console.log("Confirmed!");
                    obj.setState({
                        joined: true,
                        sessionCode: code
                    });
                } else {
                    console.log("Denied!");
                    obj.setState({
                        showInvalidCode: true
                    });
                }
            });
        } else {
            obj.setState({
                showInvalidCode: true
            });
        }
        
    }

    sendName = () => {
        if (this.state.userName == "") {
            this.setState({
                showInvalidName: true
            });
        } else {
            console.log("Routing to /session..");
            let name = this.state.userName;
            let code = this.state.sessionCode;
            this.props.socket.emit("Set name", this.props.socket.id, code, name);
            router.push("/session");
        }
        
        
    }

    render () {
        return (
            <div >

                {this.state.showInvalidCode && <ErrorPanel className = "card-panel red darken-3">
                    <h5 className="white-text"><strong>Invalid session code</strong></h5>
                    <p className="white-text">The session is either full or doesn't exist. Make sure you entered a valid 6-digit code.</p>
                    <button className="btn teal lighten-1 waves-effect waves-light" onClick={() => this.setState({showInvalidCode: false})}>
                        Got it
                    </button>
                </ErrorPanel> }

                {this.state.joined && <Panel className="card-panel cyan darken-4" >
                    <h4 className="white-text">What's your name?</h4>
                    <input id="userName" type="text" value={this.state.userName} className="validate white-text text-lighten-3" onChange={this.saveInputToState}/>
                    <label htmlFor="userName" className="white-text text-lighten-3 active" >
                        Enter your name
                    </label>
                    <button className="btn teal lighten-1 waves-effect waves-light" onClick={this.sendName}>
                        Enter
                    </button>
                </Panel>}
                <Container className="teal darken-4">
                    <h1 className="grey-text text-lighten-4">
                        Study Session
                    </h1>
                    <div className="row input-field">
                        <input id="joinCode" type="number" value={this.state.joinCode} className="validate blue-text text-lighten-3" onChange={this.saveInputToState}/>
                        <label htmlFor="joinCode" className="green-text text-lighten-3 active" >
                            Enter a session code
                        </label>
                    </div>
                    <button className="btn teal lighten-1 waves-effect waves-light" onClick={this.sendCode} disabled={this.state.showInvalidCode}>
                        Join
                    </button>
                    <div id="or-container"><p className="grey-text text-lighten-4">OR</p></div>
                    <p className="green-text text-lighten-3 active"><strong>Start a new session</strong></p>
                    <button className="btn teal lighten-1 waves-effect waves-light" disabled={this.state.showInvalidCode}>
                        Create
                    </button>

                </Container>
            </div>
        )
    }
}

export default LandingPage;