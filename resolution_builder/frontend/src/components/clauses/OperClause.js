import React, { Component } from "react";
import SubClause from "./SubClause";
import SubClauseAdd from "./SubClauseAdd";

class OperClause extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
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
        this.addSubClause = this.addSubClause.bind(this);
        console.log(this.state.id);
        
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

    addSubClause() {
        let oldSubClauses = this.state.subClauses;
        let newSubClause = document.getElementById("addSubClause").value;
        oldSubClauses.push(newSubClause);
        this.setState({
            subClauses: oldSubClauses,
            addSubClause: false
        });
    }

    render() {
        const showSubClauseForm = this.state.addSubClause ? <button onClick={this.removeSubClauseForm}>Cancel Subform</button> : <button onClick={this.showSubClauseForm}>Add Subclause</button>;
        const subClauses = this.state.subClauses.map(item => <SubClause text={item} />);
        const deleteButton = <button onClick={() => this.props.deleteMethod(this.state.id)}>DELETE</button>;
        return (<li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <u><strong>{this.state.command}</strong></u> {this.state.body};
            {this.state.hover && deleteButton}
            {this.state.hover && <button>EDIT</button>}
            {this.state.hover && showSubClauseForm}
            {this.state.addSubClause && <SubClauseAdd submitEvent={this.addSubClause} />}
            <ol class="subClauses" type="a">
                {subClauses}
            </ol>
        </li>)
    }

}

export default OperClause;