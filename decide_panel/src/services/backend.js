import axios from "axios";

const URI_BACKEND = "http://localhost:8000/";

const Api = {
  connection_test() {
    return axios.get(URI_BACKEND + "admin/").then((res) => res.status);
  },
};

export default Api;
