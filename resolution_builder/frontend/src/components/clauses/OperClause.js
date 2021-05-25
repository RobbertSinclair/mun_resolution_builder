import React, { Component } from "react";

class OperClause extends Component {

    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
            body: props.body
        }
    }

    render() {

        return (<li>
            <u><strong>{this.state.command}</strong></u> {this.state.body};
        </li>)
    }

}

export default OperClause;