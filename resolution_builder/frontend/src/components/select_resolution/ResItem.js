import React, { Component } from "react";

class ResItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const imageURL = "/static/images/flags/" + this.props.country + ".svg";
        return (<tr>
            <td><img class="country-flag" src={imageURL} /></td>
            <td>{this.props.title}</td>
        </tr>
        );
    }
}

export default ResItem;