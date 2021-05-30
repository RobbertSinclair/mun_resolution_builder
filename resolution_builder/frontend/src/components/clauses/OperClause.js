import React, { Component } from "react";

class OperClause extends Component {

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

        return (<li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <u><strong>{this.state.command}</strong></u> {this.state.body};
            {this.state.hover && <button>DELETE</button>}
            {this.state.hover && <button>Add Subclause</button>}
        </li>)
    }

}

export default OperClause;