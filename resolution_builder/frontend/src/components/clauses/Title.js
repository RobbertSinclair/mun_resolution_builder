import React, { Component } from "react";

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "title": props.title,
            "country_code": props.country,
            "countryTable": {}
        }
        console.log(this.state);
        this.getCountryTable = this.getCountryTable.bind(this);
        this.getCountryTable();
    }

    getDerivedStateFromProps(nextProps, prevState) {
        return {
            title: nextProps.title,
            country_code: nextProps.country,
        }
    }


    getCountryTable() {
        fetch("/static/json/country_to_code.json")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({countryTable: data});
                }
            )
    }

    render() {
        return (<div>
                <form>
                    
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.props.titleChange}></input>
                    </label><br></br>
                    <label>
                        Country:
                        <input type="text" onChange={this.props.countryMethod}></input>
                    </label><br></br>
                    <label>
                        Security Council
                        <input type="checkbox" onChange={this.props.checkMethod}></input>
                    </label>
                </form>
        </div>);
    }
}

export default Title;