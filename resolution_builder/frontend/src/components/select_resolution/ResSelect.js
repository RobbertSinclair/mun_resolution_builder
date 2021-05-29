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
        const resolutions = this.state.resolutions.map(item => <ResItem title={item.title} />);
        const loading = this.state.loading;
        console.log(this.state.resolutions);
        return (<div id="res-select">
            <h1 class="title">Pick a Resolution</h1>
            {loading ? <h1>Loading</h1> : {resolutions}}
        </div>)
    }
}

export default ResSelect;