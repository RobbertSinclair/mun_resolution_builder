import React, { Component } from "react";

class ResSelect extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            loading: true,
            resolutions: {}
        }
    }

    componentDidMount() {
        fetch("/api//resolutions/")
            .then(response => responst.json())
            .then(data => this.setState(prevState => {
                return {
                    resolutions: data,
                    loading: false
                }
            }))
    }

    render() {
        const resolutions = this.state.resolutions.map(item => <h1>{item.title}</h1>);
        return (<div id="res-select">
            <h1 class="title">Pick a Resolution</h1>
            {loading ? <h1>Loading</h1> : {resolutions}}
        </div>)
    }
}

export default ResSelect;