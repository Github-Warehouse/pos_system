<script>
import axios from "axios";
function getGoodsData() {
  axios({
    url: "static/goodsData.json",
    method: "GET"
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
export { getGoodsData };
</script>
