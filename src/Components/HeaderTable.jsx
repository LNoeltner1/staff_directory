import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class HeaderTable extends Component {
  state = {
    staff: [],
    narrowedStaff: [],
  };

  componentDidMount() {
    this.staffInfo();
  }
  staffInfo = function () {
      axios.get("https://randomuser.me/api/?results=20&nat=us").then((response) => {
          console.log(response.data.results);
          this.setState({
              //both below ended in .results
              staff: response.data.results,
              narrowedStaff: response.data.results,
          });
      })
      .catch((err) => {if (err) throw err});
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    const searchResult = this.state.staff.filter((name) => name.last.indexOf(userInput) !== -1);
    console.log(userInput);
    this.setState({ narrowedStaff: searchResult });
  };



    //   make function to handle sorting by last name
  handleSort = () => {
    console.log("clicked 'last'")
    const sortedStaff = this.state.data.sort((a, b) => {
        return a.name.last < b.name.last ? -1 : 1;
    });
    console.log(sortedStaff);
    this.setState({
        narrowedStaff: sortedStaff
    });
  };

  render() {
    return (
        <>
            <div className="header">
                <h1>Staff Directory</h1>
                <p>Click on last name to order by last name or use search box to narrow your results by last name</p>      
                <input placeholder="Search by Last Name..." onChange={this.props.handleInputChange} />
            </div>
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"><h2>Image</h2></th>
                            <th scope="col"><h2>First Name</h2></th>
                            <th scope="col"><h2>Last Name</h2></th>
                            <th scope="col"><h2>Email</h2></th>
                            <th scope="col"><h2>Age</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.staff.map((results) => {
                            // console.log(user);
                            return (
                                <tr>
                                    <th scope="row"><img src={results.picture.thumbnail} className="img-fluid" alt="thumbnail" /></th>
                                    <td key={results.login.uuid}>{results.name.first}</td>
                                    <td>{results.name.last}</td>
                                    <td><a href={results.email}>{results.email}</a></td>
                                    <td>{results.dob.age}</td>
                                </tr>  
                            );
                        })} 
                    </tbody>
                </table>
            </div>
        </>
    );
  }
}

export default HeaderTable;


// const HeaderTable = ({staffMember: {picture, name, email, dob}}) => {
//     return (
//         <>
//             <div className="header">
//                 <h1>Staff Directory</h1>
//                 <p>Click on carrots to filter by heading or use search box to narrow your results by last name</p>      
//                 <input placeholder="Search by Last Name..." onChange={(event) => this.props.handleInputChange(event)} />
//             </div>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th scope="col"><h2>Image</h2></th>
//                         <th scope="col"><h2>First Name</h2></th>
//                         <th scope="col"><h2>Last Name</h2></th>
//                         <th scope="col"><h2>Email</h2></th>
//                         <th scope="col"><h2>Age</h2></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row"></th>
//                         <td><img src={picture.thumbnail} className="img-fluid" alt="thumbnail" /></td>
//                         <td>{name.first}</td>
//                         <td>{name.last}</td>
//                         <td><a href={email}>{email}</a></td>
//                         <td>{dob.age}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </>
//     );
// }


// export default HeaderTable;