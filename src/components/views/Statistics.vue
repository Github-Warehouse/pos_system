<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>营业统计</div>
          </el-col>
          <el-col :span="3" :offset="4">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
          <el-col :span="1">
            <el-button>查询</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column prop="overviewofBusiness" label="营业概况">
              <!-- <ul>
                <li>销售额：￥0.00</li>
                <li>退款额：￥0.00</li>
                <li>服务费：￥0.00</li>
              </ul>-->
            </el-table-column>
            <el-table-column prop="salesExemption" label="销售减免">
              <!-- <ul>
                <li>赠送：￥0.00</li>
                <li>免费：￥0.00</li>
                <li>折扣：￥0.00</li>
                <li>抹零：￥0.00</li>
              </ul>-->
            </el-table-column>
            <el-table-column prop="payer" label="付款方">
              <!-- <ul>
                <li>现金：￥0.00</li>
                <li>微信：￥0.00</li>
                <li>支付宝：￥0.00</li>
                <li>储蓄卡：￥0.00</li>
                <li>银行卡：￥0.00</li>
                <li>积分：￥0.00</li>
                <li>美团外卖：￥0.00</li>
                <li>Pay：￥0.00</li>
              </ul>-->
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      input: "",
      value: "",
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      tableData: [
        {
          overviewofBusiness: "销售额：￥0.00",
          salesExemption: "赠送：￥0.00",
          payer:"现金：￥0.00"
        },
        {
          overviewofBusiness: "退款额：￥0.00",
          salesExemption: "免费：￥0.00",
          payer:"微信：￥0.00"
        },
        {
          overviewofBusiness: "服务费：￥0.00",
          salesExemption: "折扣：￥0.00",
          payer:"支付宝：￥0.00"
        },
        {
          overviewofBusiness: "",
          salesExemption: "抹零：￥0.00",
          payer:"储蓄卡：￥0.00"
        },
        {
          overviewofBusiness: "",
          salesExemption: "",
          payer:"银行卡：￥0.00"
        },
        {
          overviewofBusiness: "",
          salesExemption: "",
          payer:"积分：￥0.00"
        },
        {
          overviewofBusiness: "",
          salesExemption: "",
          payer:"美团外卖：￥0.00"
        },
        {
          overviewofBusiness: "",
          salesExemption: "",
          payer:"Pay：￥0.00"
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
