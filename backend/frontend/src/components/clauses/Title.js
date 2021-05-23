import React, { Component } from "react";

class Title extends Component {

    render() {
        return (<div>
            <form>
                <label>
                    Title:
                    <input type="text"></input>
                </label><br></br>
                <label>
                    Security Council
                    <input type="checkbox"></input>
                </label>
            </form>
        </div>)
    }
}

export default Title;