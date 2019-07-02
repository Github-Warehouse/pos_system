<template>
  <div class="pos">
    <el-row>
      <el-col :span="8" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" style="width: 100%" height="350">
              <el-table-column prop="goodsName" label="商品名称" width="150"></el-table-column>
              <el-table-column prop="count" label="数量" width="120"></el-table-column>
              <el-table-column prop="money" label="金额" width="120"></el-table-column>
              <el-table-column prop="operation" label="操作" width="120" fixed="right">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
                  <el-button
                    type="text"
                    size="small"
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-row class="btn-row">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="16" class="pos-commodity">
        <div class="title">常用商品</div>
        <div class="goods-list">
          <ul>
            <li v-for="(goodsData,index) in goodsDatas" :key="index">
              {{goodsData.goodsName}}
              <span class="price">￥{{goodsData.price}}元</span>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="(cookData,index) in cookDatas" :key="index">
                  <span>
                    <img :src="cookData.img" alt width="100px" />
                  </span>
                  <span>
                    {{cookData.cookName}}
                    <p>￥{{cookData.price}}元</p>
                  </span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">小食</el-tab-pane>
            <el-tab-pane label="饮料">饮料</el-tab-pane>
            <el-tab-pane label="套餐">套餐</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      goodsDatas: [],
      cookDatas: []
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  created() {
    axios({
      url: "static/tableData.json",
      method: "GET"
    })
      .then(response => {
        this.tableData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios({
      url: "static/goodsDatas.json",
      method: "GET"
    })
      .then(response => {
        this.goodsDatas = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios({
      url: "static/cookDatas.json",
      method: "GET"
    })
      .then(response => {
        this.cookDatas = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
  padding: 10px;
}

.btn-row {
  padding-top: 10px;
}

.title {
  height: 50px;
  background-color: #f9fafc;
  margin: 0;
  padding-left: 10px;
  text-align: left;
  line-height: 50px;
}

.goods-list {
  height: 350px;

  ul {
    li {
      float: left;
      list-style: none;
      border: 1px solid #e5e9f2;
      background-color: #fff;
      padding: 10px;
      margin: 10px;
    }
  }
}

.price {
  color: #58b7ef;
}

.goods-type {
  clear: both;
  margin: 10px;
}

.cookList {
  li {
    float: left;
    list-style: none;
    background-color: #fff;
    border: 1px solid #e5e9f2;
    display: flex;
    align-items: center;
    padding-right: 10px;
    margin: 5 px;

    span:nth-of-type(2) {
      color: red;

      p {
        color: #333;
      }
    }
  }
}
</style>
