import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => this.setState({ results: res.data.results }));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
  };

  //   render() {
  //   };
}

export default Search;
