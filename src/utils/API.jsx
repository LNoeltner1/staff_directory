import axios from "axios";

// const URL = "https://randomuser.me/api/?results=20";

export default {
  populateTable: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  }
};



// class Search extends Component {
//   state = {
//     search: "",
//     results: [],
//   };

//   componentDidMount() {
//     axios
//       .get("https://randomuser.me/api/?results=20")
//       .then((res) => this.setState({ results: res.data.results }));
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state.search);
//   };

//   //   render() {
//   //   };
// }


  // componentDidMount() {
  //   const URL = "https://randomuser.me/api/?results=20";
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   this.setState({})