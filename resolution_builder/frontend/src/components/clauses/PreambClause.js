import React, { Component } from "react";

class PreambClause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
            body: props.body
        }
    }

    render() {
        return(
            <li>
                <i>{this.state.command}</i> {this.state.body}
            </li>)

    }
}

export default PreambClause;