import React, { Component } from "react";
import SubClause from "./SubClause";
import SubClauseAdd from "./SubClauseAdd";

class OperClause extends Component {

    constructor(props) {
        super(props);
        this.state = {
            command: props.command,
            body: props.body,
            hover: false,
            addSubClause: false,
            subClauses: []
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.showSubClauseForm = this.showSubClauseForm.bind(this);
        this.removeSubClauseForm = this.removeSubClauseForm.bind(this);
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

    showSubClauseForm() {
        this.setState({
            addSubClause: true
        });
    }

    removeSubClauseForm() {
        this.setState({
            addSubClause: false
        });
    }
    render() {
        const showSubClauseForm = this.state.addSubClause ? <button onClick={this.removeSubClauseForm}>Cancel Subform</button> : <button onClick={this.showSubClauseForm}>Add Subclause</button>;
        const subClauses = this.state.subClauses.map(item => <SubClause text={item.text} />);
        return (<li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <u><strong>{this.state.command}</strong></u> {this.state.body};
            {this.state.hover && <button>DELETE</button>}
            {this.state.hover && showSubClauseForm}
            {this.state.addSubClause && <SubClauseAdd />}
            <ol class="subClauses">
                {subClauses}
            </ol>
        </li>)
    }

}

export default OperClause;