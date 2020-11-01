import Header from "./Components/Header.jsx";
import Table from "./Components/Table.jsx";
import React, {Component} from "react";
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
      const narrowedStaff = event.target.value;
      const narrowedStaff = this.state.narrowedStaff.filter((staffMember) => {
        return staffMember.name.last.indexOf(narrowedStaff)
      });
      this.setState({ narrowedStaff: narrowedStaff });
    };
  
    // handleSort = (event) => {
    //   event.preventDefault();
    //   console.log(this.state.search);
    // };
  
      render() {
        return (
          <>
            <Header />
            <Table />
          </>
        );
      };
}
  
};

export default App;
