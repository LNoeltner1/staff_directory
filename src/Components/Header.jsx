import React from 'react';
import "./Header.css";

function Header(props) {
    return (
        <div className="header">
            <h1>Staff Directory</h1>
            <p>Click on carrots to filter by heading or use search box to narrow your results by last name</p>      
            <input type="text" name="search" placeholder="Search by Last Name..." onChange={props.handleInput} />
        </div>
    );
};

export default Header;