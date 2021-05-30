import React, { Component } from "react";
import ResItem from "./ResItem";

class ResSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            resolutions: []
        }
    }

    componentDidMount() {
        fetch("/api/resolutions/?format=json")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loading: false,
                    resolutions: result
                });
            });
            
    }

    render() {
        const resItems = this.state.resolutions.map(item => <ResItem title={item.title} />);
        console.log(resItems);
        const loading = this.state.loading;
        const resText = loading ? <h1>Loading</h1> : resItems;
        return (<div id="res-select">
            <h1 class="title">Pick a Resolution</h1>
            {resText}
        </div>)
    }
}

export default ResSelect;