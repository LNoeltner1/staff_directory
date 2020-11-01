import Header from "./Components/Header.jsx";
import Table from "./Components/Table.jsx";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    staff: [],
    narrowedStaff: [],
    alphabetical: false,
    loading: false,
  };

  componentDidMount() {
    const res = axios.get("https://randomuser.me/api/?results=20");
    this.setState({
      staff: res.data.results,
      narrowedStaff: res.data.results,
    });
  }

  handleInputChange = (event) => {
    const narrowedStaffMember = event.target.value;
    const narrowedStaff = this.state.narrowedStaff.filter((staffMember) => {
      return staffMember.name.last.indexOf(narrowedStaffMember);
    });
    this.setState({ narrowedStaff: narrowedStaff });
  };
  //make function to handle sorting by last name
  // handleSort = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.search);
  // };

  render() {
    return (
      <>
        <Header handleInputChange={this.handleInputChange} />
        <Table narrowedStaff={this.state.narrowedStaff} />
      </>
    );
  }
}

export default App;
