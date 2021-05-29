import React, { Component } from "react";

class Title extends Component {

    constructor() {
        super();
        this.state = {
            "title": "THE RESOLUTION NAME"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({"title": event.target.value});
    }

    render() {
        return (<div>
            <form>
                <h1 id="title" class="title">{this.state.title}</h1>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                </label><br></br>
                <label>
                    Security Council
                    <input type="checkbox"></input>
                </label>
            </form>
        </div>);
    }
}

export default Title;