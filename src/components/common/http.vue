<script>
import axios from "axios";
const http = {
  get(url) {
    return axios({
      url,
      method: "GET"
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
export default http;
</script>