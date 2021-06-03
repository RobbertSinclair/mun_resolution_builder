import React, {Component} from "react";
import { render } from "react-dom";
import Header from "./header/Header";
import ResBuilder from "./clauses/ResBuilder";
import ResSelect from "./select_resolution/ResSelect";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildRes: true
        }
        this.createOnClick = this.createOnClick.bind(this);
        this.browseOnClick = this.browseOnClick.bind(this);
    }

    createOnClick() {
        this.setState({
            buildRes: true
        });
    }

    browseOnClick() {
        this.setState({
            buildRes: false
        });
    }

    render() {
        return (
            <div class="grid">
                <Header create={this.createOnClick} browse={this.browseOnClick} />
                <div class="res-body">
                    {this.state.buildRes ? <ResBuilder id={1} /> : <ResSelect />}
                </div>
            </div>
            )
    }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);