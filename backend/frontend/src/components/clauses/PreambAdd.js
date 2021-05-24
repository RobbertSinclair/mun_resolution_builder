import React, { Component } from "react";

class PreambAdd extends Component {
    constructor() {
        super();
        this.clauses = require("../../../static/json/clause.json");
    }

    render() {
        const clauseList = this.clauses.preamb.map(item => <option value={item}>{item}</option>) 
        return (<form>
            <label>
                Clause:
                <select name="clauses" id="clauses">
                    {clauseList}
                </select>
            </label>
            <br></br>
            <label>
                Text:
                <textarea></textarea>
            </label>
        </form>)
    }
}

export default PreambAdd;