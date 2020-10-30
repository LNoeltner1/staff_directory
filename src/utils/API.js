//handle API calls
import axios from "axios";
const BASEURL = "https://randomuser.me/";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
