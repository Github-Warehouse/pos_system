<template>
  <div class="pos">
    <el-row>
      <el-col :span="8" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" style="width: 100%" height="350">
              <el-table-column prop="goodsName" label="商品名称" width="150"></el-table-column>
              <el-table-column prop="count" label="数量" width="120"></el-table-column>
              <el-table-column prop="price" label="金额" width="120"></el-table-column>
              <el-table-column prop="operation" label="操作" width="120" fixed="right">
                <template slot-scope="scope">
                  <el-button @click="addOrderLIst(scope.row)" type="text" size="small">添加</el-button>
                  <el-button
                    type="text"
                    size="small"
                    @click.native.prevent="deleteRow(scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-row class="tota">
              <el-col :span="4" :offset="7">
                <small>数量：</small>
                <span>{{totaCount}}</span>
              </el-col>
              <el-col :span="6" :offset="1">
                <small>总价：</small>
                <span>{{totaMoney}}元</span>
              </el-col>
            </el-row>
            <el-row class="btn-row">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteAll">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
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
            <li v-for="(goods,index) in goodsData" :key="index" @click="addOrderLIst(goods)">
              {{goods.goodsName}}
              <span class="price">￥{{goods.price}}元</span>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="(goods,index) in cookData" :key="index" @click="addOrderLIst(goods)">
                  <span>
                    <img :src="goods.img" alt width="100px" />
                  </span>
                  <span>
                    {{goods.goodsName}}
                    <p>￥{{goods.price}}元</p>
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
import { getGoodsData,getCookData } from "@/components/common/http";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      goodsData: [],
      cookData: [],
      totaCount: 0,
      totaMoney: 0
    };
  },
  methods: {
    addOrderLIst(goods) {
      // 商品是否已经存在于订单列表中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }

      // 判断是否存在，若存在则数量加1
      if (isHave) {
        let arr = this.tableData.filter(
          result => result.goodsId == goods.goodsId
        );
        arr[0].count++;
      } else {
        // 若不存在，则构建新数组对象，并将新数组对象push到原数组当中
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          count: 1,
          price: goods.price
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    // 删除单个商品
    deleteRow(goods) {
      this.tableData = this.tableData.filter(
        result => result.goodsId != goods.goodsId
      );
      this.getAllMoney();
    },
    // 计算商品的金额和数量
    getAllMoney() {
      // 每次清零，避免重复添加
      this.totaCount = 0;
      this.totaMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totaCount += element.count;
          this.totaMoney = this.totaMoney + element.price * element.count;
        });
      }
    },
    // 删除所有商品
    deleteAll() {
      (this.tableData = []), (this.totaCount = 0), (this.totaMoney = 0);
    },
    // 结账
    checkout() {
      if (this.totaCount != 0) {
        this.tableData = [];
        this.totaCount = 0;
        this.totaMoney = 0;
        this.$message({
          message: "结账成功！",
          type: "success"
        });
      } else {
        this.$message.error("商品列表不能为空，请先添加商品！");
      }
    }
  },
  async created() {
    let responseGoodsData = await getGoodsData();
    this.goodsData = responseGoodsData;
    let responseCookData = await getCookData();
    this.cookData=responseCookData
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
      cursor: pointer;
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
    cursor: pointer;

    span:nth-of-type(2) {
      color: red;

      p {
        color: #333;
      }
    }
  }
}

.tota {
  min-height: 40px;
  background-color: #ffffff;
  line-height: 40px;
  border-bottom: 1px solid #EBEEF5;
}
</style>
