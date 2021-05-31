import React, { Component } from "react";

class PreambClause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
            body: props.body,
            hover: false
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter() {
        this.setState({
            hover: true
        });
    }

    mouseLeave() {
        this.setState({
            hover: false
        });
    }

    render() {
        const hover = this.state.hover;
        return(
            <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <i>{this.state.command}</i> {this.state.body}
                {hover && <button>DELETE</button>}
            </li>)
    }
}

export default PreambClause;