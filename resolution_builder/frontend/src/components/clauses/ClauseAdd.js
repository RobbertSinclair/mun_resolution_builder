import React, { Component } from "react";

class ClauseAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preamb: props.preamb,
            securityCouncil: props.securityCouncil
        };
        this.clauses = require("../../../static/json/clause.json");
        this.getClauseList = this.getClauseList.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    getClauseList() {
        console.log(this.state);
        let clauseList;
        if (this.state.preamb) {
            clauseList = this.clauses.preamb.map(item => <option value={item}>{item}</option>);
        } else {
            let operClauses = this.clauses.operative;
            if (this.state.securityCouncil && !operClauses.includes("Demands")) {
                operClauses.push("Demands");
                operClauses.sort();
            } else if (!this.state.securityCouncil) {
                let i = 0;
                operClauses = operClauses.filter(function(value, index, arr) {
                    return value != "Demands";
                });
            }
            console.log(operClauses);
            clauseList = operClauses.map(item => <option value={item}>{item}</option>);
        }
        return clauseList;
    }

    onClick() {
        console.log("Submit Clicked");
    }

    render() {
        const clauseList = this.getClauseList();
        console.log(clauseList);
        return (<form>
            <fieldset>
            <legend>{this.state.preamb ? "Add a Preamblatory clause" : "Add an Operative Clause"}</legend>
            <label>
                Clause:<br></br>
                <select name="clauses" class="clause-select" id={this.state.preamb ? "preamb-command" : "oper-command"}>
                    {clauseList}
                </select>
            </label>
            <br></br>
            <label>
                Text:<br></br>
                <textarea class="clause-body" id={this.state.preamb ? "preamb-body" : "oper-body"}></textarea>
            </label>
            <br></br>
            <button class="submit-button" type="button" onClick={this.props.clickMethod}>Submit</button>
            </fieldset>
        </form>)
    }
}

export default ClauseAdd;