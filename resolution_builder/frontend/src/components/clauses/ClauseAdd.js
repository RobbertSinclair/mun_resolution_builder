import React, { Component } from "react";

class ClauseAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preamb: props.preamb
        };
        this.clauses = require("../../../static/json/clause.json");
        this.getClauseList = this.getClauseList.bind(this);
    }

    getClauseList() {
        let clauseList;
        if (this.state.preamb) {
            clauseList = this.clauses.preamb.map(item => <option value={item}>{item}</option>);
        } else {
            clauseList = this.clauses.operative.map(item => <option value={item}>{item}</option>);
        }
        return clauseList;
    }

    render() {
        const clauseList = this.getClauseList(); 
        return (<form>
            <fieldset>
            <legend>Add a Preamblatory clause</legend>
            <label>
                Clause:
                <select name="clauses" id="clauses">
                    {clauseList}
                </select>
            </label>
            <br></br>
            <label>
                Text:<br></br>
                <textarea></textarea>
            </label>
            <br></br>
            <input type="submit"></input>
            </fieldset>
        </form>)
    }
}

export default ClauseAdd;