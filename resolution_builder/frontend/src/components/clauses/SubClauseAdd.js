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
                    Text:
                    <textarea></textarea>
                </label>
                <br></br>
                <button class="submit-button" type="button">Submit</button> 
            </fieldset>
        </form>);
    }
}

export default SubClauseAdd;