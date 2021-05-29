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
    }

    render() {
        return (
            <div class="grid">
                <Header />
                {this.state.buildRes ? <ResBuilder /> : <ResSelect />}
            </div>
            )
    }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);