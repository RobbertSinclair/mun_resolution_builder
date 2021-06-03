import React, { Component } from "react";

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "title": "THE RESOLUTION NAME",
            "country_code": props.country,
            "countryTable": {}
        }
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.getCountryTable = this.getCountryTable.bind(this);
        this.getCountryTable();
    }

    handleChange(event) {
        this.setState({"title": event.target.value});
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

    changeCountry(event) {
        let input = event.target.value.toLowerCase();
        let countryCode = this.state.countryTable[input];
        if (countryCode == null) {
            console.log("That is not a valid country");
        } else {
            this.setState({country_code: countryCode});
        }
    }

    render() {
        let flagURL = "/static/images/flags/" + this.state.country_code + ".svg";
        return (<div>
                <h1 id="title" class="title">{this.state.title}</h1>
                <img class="country-flag" src={flagURL} />
                <form>
                    
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                    </label><br></br>
                    <label>
                        Country:
                        <input type="text" onChange={this.changeCountry}></input>
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