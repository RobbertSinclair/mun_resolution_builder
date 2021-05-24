import React, { Component } from "react";
import Title from "./Title"
import ClauseAdd from "./ClauseAdd";

class ResBuilder extends Component {

    constructor() {
        super();
        this.state = {
            "securityCouncil": false,
            "addPreamb": false,
            "addOper": false
        };
        this.preambClick = this.preambClick.bind(this);
        this.operClick = this.operClick.bind(this);
    }

    preambClick() {
        const oldValue = this.state.addPreamb;
        this.setState({"addPreamb": !oldValue});
    }

    operClick() {
        const oldValue = this.state.addOper;
        this.setState({"addOper": !oldValue});
    }

    render() {
        const addPreamb = this.state.addPreamb;
        const addOper = this.state.addOper;
        return (<div class="res-builder">
            <Title />
            <h2>PREAMBLATORY CLAUSES</h2>
            <button onClick={preambClick} class="add_button">ADD A PREAMBLATORY CLAUSE</button>
            {addPreamb ? <ClauseAdd preamb={true} /> : <button onClick={preambClick} class="add_button">ADD A PREAMBLATORY CLAUSE</button>}
            <h2>OPERATIVE CLAUSE</h2>
            <button onClick={operClick} class="add_button">ADD AN OPERATIVE CLAUSE</button>
            {addOper ? <ClauseAdd preamb={false} /> : <button onClick={operClick} class="add_button">ADD AN OPERATIVE CLAUSE</button>}

        </div>)
    }
}

export default ResBuilder;