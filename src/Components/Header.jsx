import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Staff Directory</h1>
                <p>Click on carrots to filter by heading or use search box to narrow your results by last name</p>      
                <input placeholder="Search by Last Name..." onChange={(event) => this.props.handleInputChange(event)} />
            </div>
        );
    }
}

export default Header;