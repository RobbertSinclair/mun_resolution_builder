import React, { Component } from "react";

class Title extends Component {

    constructor() {
        super();
        this.state = {
            "title": "THE RESOLUTION NAME",
            "country_code": "un"
        }
        this.countryTable = require("../../../static/json/country_to_code.json");
        this.handleChange = this.handleChange.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
    }

    handleChange(event) {
        this.setState({"title": event.target.value});
    }

    changeCountry(event) {
        let countryCode = this.countryTable[event.target.value.toLowerCase()];
        if(countryCode == null) {
            console.log("There is no country code");
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
                    </label>
                    <label>
                        Security Council
                        <input type="checkbox"></input>
                    </label>
                </form>
        </div>);
    }
}

export default Title;