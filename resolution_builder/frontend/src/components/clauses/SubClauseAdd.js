import React, { Component } from "react";

class SubClauseAdd extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <form>
            <fieldset>
                <legend>Add a SubClause</legend>
                <label>
                    Text:<br></br>
                    <textarea class="clause-body" id="addSubClause"></textarea>
                </label>
                <br></br>
                <button class="submit-button" type="button" onClick={this.props.submitEvent}>Submit</button> 
            </fieldset>
        </form>);
    }
}

export default SubClauseAdd;