import axios from "axios";

const URI_BACKEND = "http://localhost:8000/";

const Api = {
  connection_test() {
    return axios.get(URI_BACKEND + "admin/").then((res) => res.status);
  },

  get_census(voting_id) {
    return axios
      .get(URI_BACKEND + "census/" + voting_id + "/")
      .then((res) => res.data);
  },
  get_votes(voting_id){
    return axios.get(URI_BACKEND + "voting/?id=" + voting_id).then((res) => res.data);
  }
};

export default Api;