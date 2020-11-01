// import React from "react";

// import API from "../utils/API";
// import Header from "./Header"
// import Table from "./Table"

// class CentralHub extends React.Component {
//     state = {
//         staff: [],
//         search: "",
//         narrowedStaff: [],
//     };

//     componentDidMount() {
//         API.populateTable()
//         .then((res) => {
//             this.setState({
//                 staff: res.data.results,
//                 narrowedStaff: res.data.results,
//             }); 
//         })
//         .catch ((err) => console.log(err));
//     }
//     handleInputChange = (event) => {
//         this.setState({ search: event.target.value});
//         const searched = this.state.staff.filter((staffMember) => {
//             return (
//                 staffMember.name.first
//                 .toLowerCase()
//                 .indexOf(event.target.value.toLowerCase()) !== -1
//             );
//         });
//         this.setState({ narrowedStaff: searched});
//     };

//     render () {
//         const staffInfo = this.state.narrowedStaff.map((staffMember, i) => {
//             return (
//                 <Table key={i}
//                     first={staffMember.name.first}
//                     last={staffMember.name.last}
//                     image={staffMember.picture.thumbnail}
//                     email={staffMember.email}
//                     age={staffMember.dob.age}                
//                 />
//             );
//         });

//         return (
//             <>
//                 <Header handleInputChange={this.handleInputChange} value={this.state.search}/>
                
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th scope="col">Image</th>
//                             <th scope="col">First Name</th>
//                             <th scope="col">Last Name</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Age</th>
//                         </tr>
//                     </thead>
//                     {staffInfo}
//                 </table>

//             </>
//         )
//     }


// }

// export default CentralHub;
    
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