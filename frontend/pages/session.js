import React, {Component} from "react";
export default class Session extends Component {
    render () {
        return (
        <div> 
            Session page!
            <p>{this.props.router}</p>
        </div>
        
        )
    }
}