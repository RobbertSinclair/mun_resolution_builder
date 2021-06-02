import React, { Component } from "react";
import Title from "./Title"
import ClauseAdd from "./ClauseAdd";
import OperClause from "./OperClause";
import PreambClause from "./PreambClause";

class ResBuilder extends Component {

    constructor() {
        super();
        this.state = {
            "securityCouncil": false,
            "addPreamb": false,
            "addOper": false,
            "preambClauses": [],
            "operClauses": []
        };
        this.preambClick = this.preambClick.bind(this);
        this.operClick = this.operClick.bind(this);
        this.addPreambClause = this.addPreambClause.bind(this);
        this.addOperClause = this.addOperClause.bind(this);
        this.toggleSecurityCouncil = this.toggleSecurityCouncil.bind(this);
        this.deleteOperClause = this.deleteOperClause.bind(this);
    }

    preambClick() {
        const oldValue = this.state.addPreamb;
        this.setState({"addPreamb": !oldValue});
    }

    operClick() {
        const oldValue = this.state.addOper;
        this.setState({"addOper": !oldValue});
    }

    addPreambClause() {
        let preambCommand = document.getElementById("preamb-command").value;
        let preambBody = document.getElementById("preamb-body").value;
        let oldPreambClauses = this.state.preambClauses;
        oldPreambClauses.push({command: preambCommand, body: preambBody});
        this.setState({
            "preambClauses": oldPreambClauses,
            "addPreamb": false
        });
    }

    addOperClause() {
        let operCommand = document.getElementById("oper-command").value;
        let operBody = document.getElementById("oper-body").value;
        let oldOperClauses = this.state.operClauses;
        oldOperClauses.push({command: operCommand, body: operBody});
        this.setState({
            "operClauses": oldOperClauses,
            "addOper": false 
        });
    }

    toggleSecurityCouncil() {
        this.setState({securityCouncil: !this.state.securityCouncil});
    }

    deleteOperClause(index) {
        let operClauses = this.state.operClauses;
        operClauses.splice(index, 1);
        this.setState({
            operClauses: operClauses
        });
    }

    deletePreambClause(index) {
        let preambClauses = this.state.preambClauses;
        preambClauses.splice(index, 1);
        this.setState({
            preambClauses: preambClauses
        });
    }

    render() {
        const addPreamb = this.state.addPreamb;
        const addOper = this.state.addOper;
        const preambClauses = this.state.preambClauses.map((item, index) => <PreambClause id={index} command={item.command} body={item.body} deleteMethod={this.deletePreambClause} />);
        const operClauses = this.state.operClauses.map((item, index) => <OperClause id={index} command={item.command} body={item.body} deleteMethod={this.deleteOperClause} />);
        return (<div class="res-builder">
            <Title checkMethod={this.toggleSecurityCouncil}/>
            <h2>PREAMBLATORY CLAUSES</h2>
            <ul>
                {preambClauses}
            </ul>
            {addPreamb ? <ClauseAdd preamb={true} clickMethod={this.addPreambClause} securityCouncil={this.state.securityCouncil} /> : <button onClick={this.preambClick} class="add_button">ADD A PREAMBLATORY CLAUSE</button>}
            <h2>OPERATIVE CLAUSES</h2>
            <ol>
                {operClauses}
            </ol>
            {addOper ? <ClauseAdd preamb={false} clickMethod={this.addOperClause} securityCouncil={this.state.securityCouncil} /> : <button onClick={this.operClick} class="add_button">ADD AN OPERATIVE CLAUSE</button>}
        </div>);
    }
}

export default ResBuilder;