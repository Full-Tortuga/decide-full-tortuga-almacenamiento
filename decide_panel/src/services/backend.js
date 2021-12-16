import axios from "axios";

const URI_BACKEND = "http://localhost:8000/";

const Api = {
  connection_test() {
    return axios.get(URI_BACKEND + "admin/").then((res) => res.status);
  },

  get_voting(id) {
    return axios.get(URI_BACKEND + "voting/?id=" + id).then((res) => res.data);
  },
};

export default Api;
