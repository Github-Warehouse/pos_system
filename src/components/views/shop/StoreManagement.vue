<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>门店管理</div>
          </el-col>
          <el-col :span="6" :offset="5">
            <el-input placeholder="可输入编码、名称查询" v-model="input">
              <el-button slot="append">查询</el-button>
            </el-input>
          </el-col>
          <el-col :span="3" :offset="8">
            <el-button>新增门店</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">区域</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-light">默认</div>
            </el-col>
          </el-row>
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
            <el-table-column prop="operation" label="操作" width="130">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >删除</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="serialNumber" label="编号" width="130"></el-table-column>
            <el-table-column prop="shopName" label="店名" width="130"></el-table-column>
            <el-table-column prop="address" label="地址" width="250"></el-table-column>
            <el-table-column prop="phone" label="电话" width="130"></el-table-column>
            <el-table-column prop="number" label="人数" width="130"></el-table-column>
            <el-table-column prop="data" label="创建日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "StoreManagement",
  data() {
    return {
      input: "",
      input1: "",
      tableData: [
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
        },
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
        },
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
        },
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
        },
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
        },
        {
          serialNumber: "888",
          shopName: "快餐",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17600129340",
          number: "1",
          data: "2019-07-03",
          state: "营业中"
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
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: normal;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
