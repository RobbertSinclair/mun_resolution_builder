import React, { Component } from "react";

class SubClause extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (<li>
            {this.state.text}
        </li>);
    }

}

export default SubClause