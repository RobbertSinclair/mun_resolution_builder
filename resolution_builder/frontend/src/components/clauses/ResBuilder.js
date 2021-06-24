import React, { Component } from "react";
import Title from "./Title"
import ClauseAdd from "./ClauseAdd";
import OperClause from "./OperClause";
import PreambClause from "./PreambClause";

class ResBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "securityCouncil": false,
            "addPreamb": false,
            "addOper": false,
            "id": this.props.id,
            "country": "un",
            "preambClauses": [],
            "operClauses": [],
            "title": "",
            "countryTable": {}
        };
        this.preambClick = this.preambClick.bind(this);
        this.operClick = this.operClick.bind(this);
        this.addPreambClause = this.addPreambClause.bind(this);
        this.addOperClause = this.addOperClause.bind(this);
        this.toggleSecurityCouncil = this.toggleSecurityCouncil.bind(this);
        this.deleteOperClause = this.deleteOperClause.bind(this);
        this.deletePreambClause = this.deletePreambClause.bind(this);
        this.getClauses = this.getClauses.bind(this);
        this.getResolutionData = this.getResolutionData.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.saveResolution = this.saveResolution.bind(this);
        if (this.state.id != null) {
            console.log(this.state.id);
            this.getResolutionData();
        }
        this.getCountryTable();
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

    preambClick() {
        const oldValue = this.state.addPreamb;
        this.setState({"addPreamb": !oldValue});
    }

    operClick() {
        const oldValue = this.state.addOper;
        this.setState({"addOper": !oldValue});
    }

    addPreambClause() {
        let preambCommand = document.getElementById("preamb-command").value;
        let preambBody = document.getElementById("preamb-body").value;
        let oldPreambClauses = this.state.preambClauses;
        oldPreambClauses.push({command: preambCommand, body: preambBody});
        this.setState({
            "preambClauses": oldPreambClauses,
            "addPreamb": false
        });
    }

    addOperClause() {
        let operCommand = document.getElementById("oper-command").value;
        let operBody = document.getElementById("oper-body").value;
        let oldOperClauses = this.state.operClauses;
        oldOperClauses.push({command: operCommand, body: operBody});
        this.setState({
            "operClauses": oldOperClauses,
            "addOper": false 
        });
    }

    toggleSecurityCouncil() {
        this.setState({securityCouncil: !this.state.securityCouncil});
    }

    deleteOperClause(index) {
        let operClauses = this.state.operClauses;
        operClauses.splice(index, 1);
        this.setState({
            operClauses: operClauses
        });
    }

    deletePreambClause(index) {
        let preambClauses = this.state.preambClauses;
        preambClauses.splice(index, 1);
        this.setState({
            preambClauses: preambClauses
        });
    }

    changeTitle(event) {
        this.setState({"title": event.target.value});
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

    getClauses(clauseList) {
        let operClauses = [];
        let preambClauses = [];
        for(let i = 0; i < clauseList.length; i++) {
            if (clauseList[i].preamb) {
                preambClauses.push(clauseList[i]);
            } else {
                operClauses.push(clauseList[i]);
            }
        }
        return {oper: operClauses, preamb: preambClauses};
    }

    getResolutionData() {
        const id = this.state.id;
        fetch("/api/get_resolutions?id=" + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.country);
                const clauses = this.getClauses(data.clauses);
                console.log(clauses);
                this.setState({
                    country: data.country,
                    preambClauses: clauses.preamb,
                    operClauses: clauses.oper,
                    title: data.title
                })
            });
    }

    saveResolution() {
        let clauses = [];
        let clause;
        let theClause;
        let csrf_token = document.getElementsByName("csrfmiddlewaretoken")[0].value;
        console.log(csrf_token);
        for (clause in this.state.preambClauses) {
            theClause = this.state.preambClauses[clause];
            theClause["preamb"] = true;
            clauses.push(theClause);
        }
        
        for (clause in this.state.operClauses) {
            theClause = this.state.operClauses[clause]
            theClause["preamb"] = false
            clauses.push(theClause);
        }

        const postData = {
            title: this.state.title,
            country: this.state.country,
            clauses: clauses
        };

        console.log(postData);
        
        const requestOptions = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "X-CSRFToken": csrf_token
            },
            body: JSON.stringify(postData)
        };

        fetch("/api/create-res", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
    }

    render() {
        let flagURL = "/static/images/flags/" + this.state.country + ".svg";
        const addPreamb = this.state.addPreamb;
        const addOper = this.state.addOper;
        const preambClauses = this.state.preambClauses.map((item, index) => <PreambClause id={index} command={item.command} body={item.body} deleteMethod={this.deletePreambClause} />);
        const operClauses = this.state.operClauses.map((item, index) => <OperClause id={index} command={item.command} body={item.body} deleteMethod={this.deleteOperClause} />);
        return (<div class="res-builder">
            <h1 id="title" class="title">{this.state.title}</h1>
            <img class="country-flag" src={flagURL} />
            <Title country={this.state.country} title={this.state.title} checkMethod={this.toggleSecurityCouncil} titleChange={this.changeTitle} countryMethod={this.changeCountry} />
            <h2>PREAMBLATORY CLAUSES</h2>
            <ul>
                {preambClauses}
            </ul>
            {addPreamb ? <ClauseAdd preamb={true} clickMethod={this.addPreambClause} securityCouncil={this.state.securityCouncil} /> : <button onClick={this.preambClick} class="add_button">ADD A PREAMBLATORY CLAUSE</button>}
            <h2>OPERATIVE CLAUSES</h2>
            <ol>
                {operClauses}
            </ol>
            {addOper ? <ClauseAdd preamb={false} clickMethod={this.addOperClause} securityCouncil={this.state.securityCouncil} /> : <button onClick={this.operClick} class="add_button">ADD AN OPERATIVE CLAUSE</button>}
            <br></br>
            <br></br>
            <button class="add_button" onClick={this.saveResolution}>SAVE RESOLUTION</button>
        </div>);
    }
}

export default ResBuilder;