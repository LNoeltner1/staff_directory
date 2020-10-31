import React from "react";
import axios from "axios";
import API from "../utils/API";
import Header from "./Header"
import Table from "./Table"

class CentralHub extends React.Component {
    state = {
        staff: [],
        search: "",
        narrowedStaff: [],
    };

    componentDidMount() {
        API.populateTable()
        .then((res) => {
            this.setState({
                staff: res.data.results,
                narrowedStaff: res.data.results,
            }); 
        })
        .catch ((err) => console.log(err));
    }
    handleInputChange = (event) => {
        this.setState({ search: event.target.value});
        const searched = this.state.staff.filter((staffMember) => {
            return (
                staffMember.name.first
                .toLowerCase()
                .indexOf(event.target.value.toLowerCase()) !== -1
            );
        });
        this.setState({ narrowedStaff: searched});
    };


}

export default CentralHub;
    
// function Search (props) {
//     return (
        
//         <div className="search">
//             <nav className="navbar navbar-light bg-light">
//                 <form className="form-inline mx-auto">
//                     <input onChange={props.handleInputChange} value={props.value} className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
//                 </form>
//             </nav>
//         </div>
        
//     );
// };

// export default Search;