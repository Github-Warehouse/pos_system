<template>
  <div>{{message}}</div>
</template>

<script>
import http from "@/components/common/http";
export default {
  name: "Statistics",
  data() {
    return {
      message: "统计"
    };
  },
  async created() {
    // let response = await http.get("/RptHomeView/GetSaleData?BranchId=");
    // console.log(response);
  }
};
</script>

<style lang="stylus" scoped></style>
