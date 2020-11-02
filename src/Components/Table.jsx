import React, { Component } from 'react';
import axios from "axios";

class Table extends Component {
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

    handleSort = () => {
        console.log("clicked 'last'")
        //this.state.data.sort
        const sortedStaff = this.state.narrowedStaff.sort((a, b) => {
            return a.dob.age < b.dob.age ? -1 : 1;
        });
        console.log(sortedStaff);
        this.setState({
            staff: sortedStaff
        });
      };

    render() {
        return (
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"><h2>Image</h2></th>
                            <th scope="col"><h2>First Name</h2></th>
                            <th scope="col"><h2>Last Name</h2></th>
                            <th scope="col"><h2>Email</h2></th>
                            <th scope="col"><button onClick={this.handleSort}><h2>Age</h2></button></th>
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
        );
    }
}

export default Table;