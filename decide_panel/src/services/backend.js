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
    return axios
       .get(URI_BACKEND + "voting/list")
       .then((res) => res.data);
  },
  
  create_backup() {
    return axios
      .post(URI_BACKEND + "backups/create")
      .then((res) => res.status);
  },
  get_backups() {
    return axios
      .get(URI_BACKEND + "backups/list")
      .then((res) => res.data);
  },
  restore_backup(backup) {
    return axios
      .post(URI_BACKEND + "backups/restore/"+backup)
      .then((res) => res.status);
  },
};

export default Api;