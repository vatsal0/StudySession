import React, {Component} from "react";
import Controller from "../lib/Controller";
import Chat from "./styles/SessionStyle";
import Navbar from "./styles/Navbar";
import Container from "./styles/SessionContainer";
import ErrorPanel from "./styles/ErrorPanel";
import Sidebar from "./styles/Sidebar";

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList: [],
        }
        console.log(Controller);
        console.log(props);
        console.log("Loading members...")
        // props.socket.emit("Get members", props.code, (list) => {
        //     for(let id in list) {
        //         let memberList = this.state.memberList;
        //         let name = list[id];
        //         memberList.push(<li className="collection-item" key={name}>{name}</li>);
        //         this.setState({
        //             memberList: memberList,
        //         })
        //     }
        // });
        // props.socket.on("Member joined", (name) => {
        //     let memberList = this.state.memberList;
        //     memberList.push(<li className="collection-item">{name}</li>);
        //     this.setState({
        //         memberList: memberList,
        //     })
        // })
        // this.setState({membersLoaded:true})
    }
    
    render () {
        return (
            <div className="teal darken-3">
                {(this.props.code == undefined || this.props.socket == undefined) && <ErrorPanel className = "card-panel red darken-3">
                    <h5 className="white-text"><strong>Session error</strong></h5>
                    <p className="white-text">Session expired or code is invalid. Try joining again.</p>
                    <button className="btn teal lighten-1 waves-effect waves-light" onClick={() => Controller.push({pathname: "/"})}>
                        Return
                    </button>
                </ErrorPanel>}
                <Container>
                    <Navbar>
                        <div className="nav-wrapper teal darken-3">
                            <ul id="nav-mobile">
                                <li><button className="btn">Text chat</button></li>
                                <li><button className="btn">Video chat</button></li>
                                <li className="right">Session code: {this.props.code}</li>
                            </ul>
                        </div>
                    </Navbar>
                    <Chat className="card-panel teal darken-3"></Chat>
                </Container>
                {this.props.socket && 
                <Sidebar className="collection teal darken-3">
                    {this.state.memberList}
                </Sidebar>
                }
            </div>
        )
    }
}

export default Session;