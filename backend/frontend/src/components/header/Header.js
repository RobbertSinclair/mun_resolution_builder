import React, { Component } from "react";

class Header extends Component {
    
    render() {
        return (
            <div id="header">
                <h1 id="header-title">MUN Resolution Creator</h1>
                <div id="navbar">
                    <div class="nav-item">
                        <button class="nav-button item1">Browse Resolutions</button>
                    </div>
                    <div class="nav-item">
                        <button class="nav-button item2">Create A Resolution</button>
                    </div>
                </div>
            </div>
            );
    }
}

export default Header;