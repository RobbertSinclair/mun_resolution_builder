import React, {Component} from "react";
import { render } from "react-dom";
import Header from "./header/Header";
import ResBuilder from "./clauses/ResBuilder";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="grid">
                <Header />
                <ResBuilder />
            </div>
            )
    }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);