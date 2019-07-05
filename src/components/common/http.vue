<script>
import axios from "axios";
export function getGoodsData() {
  return axios({
    url: "static/goodsData.json",
    method: "GET"
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
export function getCookData() {
  return axios({
    url: "static/cookData.json",
    method: "GET"
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
</script>