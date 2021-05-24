import React, { Component } from "react";
import Title from "./Title"
import PreambAdd from "./PreambAdd";

class ResBuilder extends Component {

    constructor() {
        super();
        this.state = {
            "securityCouncil": false
        };
    }

    render() {
        return (<div class="res-builder">
            <Title />
            <h2>PREAMBLATORY CLAUSES</h2>
            <button class="add_button">ADD A PREAMBLATORY CLAUSE</button>
            <PreambAdd />
            <h2>OPERATIVE CLAUSE</h2>
            <button class="add_button">ADD AN OPERATIVE CLAUSE</button>

        </div>)
    }
}

export default ResBuilder;