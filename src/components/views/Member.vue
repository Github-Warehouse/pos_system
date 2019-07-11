<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>会员档案</div>
          </el-col>
          <el-col :span="6" :offset="3">
            <el-input placeholder="可输入会员号、姓名、手机查询" v-model="input">
              <el-button slot="append">查询</el-button>
            </el-input>
          </el-col>
          <el-col :span="1" :offset="7">
            <el-button>新增</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>导入</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>导出</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>打印</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-input placeholder="请输入区域名称添加" v-model="input1">
                <el-button slot="append">添加</el-button>
              </el-input>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column prop="serialNumber" label="序号" width="100"></el-table-column>
            <el-table-column prop="operation" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >删除</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="memberID" label="会员号" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="membershipCategory" label="会员类别" width="130"></el-table-column>
            <el-table-column prop="discount" label="折扣" width="100"></el-table-column>
            <el-table-column prop="numberOfConsumptions" label="消费次数" width="130"></el-table-column>
            <el-table-column prop="availableIntegral" label="可用积分" width="130"></el-table-column>
            <el-table-column prop="consumptionAmount" label="消费金额" width="130"></el-table-column>
            <el-table-column prop="reserveBalance" label="储值余额" width="130"></el-table-column>
            <el-table-column prop="phone" label="手机号码" width="130"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      input: "",
      input1: "",
      tableData: [
        {
          serialNumber: "1",
          memberID: "002",
          name: "孙洋",
          membershipCategory: "超级会员",
          discount: "100",
          numberOfConsumptions: "10",
          availableIntegral: "100",
          consumptionAmount: "1100.00",
          reserveBalance: "1000.00",
          phone: "17600129340",
          state: "正常"
        },
        {
          serialNumber: "1",
          memberID: "002",
          name: "孙洋",
          membershipCategory: "超级会员",
          discount: "100",
          numberOfConsumptions: "10",
          availableIntegral: "100",
          consumptionAmount: "1100.00",
          reserveBalance: "1000.00",
          phone: "17600129340",
          state: "正常"
        },
        {
          serialNumber: "1",
          memberID: "002",
          name: "孙洋",
          membershipCategory: "超级会员",
          discount: "100",
          numberOfConsumptions: "10",
          availableIntegral: "100",
          consumptionAmount: "1100.00",
          reserveBalance: "1000.00",
          phone: "17600129340",
          state: "正常"
        },
        {
          serialNumber: "1",
          memberID: "002",
          name: "孙洋",
          membershipCategory: "超级会员",
          discount: "100",
          numberOfConsumptions: "10",
          availableIntegral: "100",
          consumptionAmount: "1100.00",
          reserveBalance: "1000.00",
          phone: "17600129340",
          state: "正常"
        },
        {
          serialNumber: "1",
          memberID: "002",
          name: "孙洋",
          membershipCategory: "超级会员",
          discount: "100",
          numberOfConsumptions: "10",
          availableIntegral: "100",
          consumptionAmount: "1100.00",
          reserveBalance: "1000.00",
          phone: "17600129340",
          state: "正常"
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

.el-aside {
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: normal;
}

.grid-content {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #ffffff;
}

.bg-purple {
  background: #d3dce6;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

