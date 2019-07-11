<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>支付设置</div>
          </el-col>
          <el-col :span="2" :offset="18">
            <el-button>排序</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>新增</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column prop="serialNumber" label="序号"></el-table-column>
            <el-table-column prop="paymentMethod" label="支付方式"></el-table-column>
            <el-table-column prop="state" label="状态">
              <template>
                <el-tooltip :content="'Switch value: ' + value" placement="top">
                  <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="100"
                    inactive-value="0"
                  ></el-switch>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="operation" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >修改</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "PaymentSettings",
  data() {
    return {
      value: "100",
      tableData: [
        {
          serialNumber: "1",
          paymentMethod: "银行卡"
        },
        {
          serialNumber: "2",
          paymentMethod: "支付宝"
        },
        {
          serialNumber: "3",
          paymentMethod: "收银通"
        },
        {
          serialNumber: "4",
          paymentMethod: "微信支付"
        },
        {
          serialNumber: "5",
          paymentMethod: "储值卡"
        },
        {
          serialNumber: "6",
          paymentMethod: "积分支付"
        },
        {
          serialNumber: "7",
          paymentMethod: "Pay"
        }
      ]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #ffffff;
}

.grid-content {
  border-radius: 4px;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: normal;
}

body > .el-container {
  margin-bottom: 40px;
}

ul {
  padding: 0;
  vertical-align: top;

  li {
    list-style: none;
  }
}
</style>
