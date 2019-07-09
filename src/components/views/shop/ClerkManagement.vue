<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>店员管理</div>
          </el-col>
          <el-col :span="6" :offset="5">
            <el-input placeholder="可输入姓名查询" v-model="input">
              <el-button slot="append">查询</el-button>
            </el-input>
          </el-col>
          <el-col :span="2" :offset="7">
            <el-button>新增店员</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>店员角色权限</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column prop="function" label="功能" width="130">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >删除</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="uername" label="用户名" width="130"></el-table-column>
            <el-table-column prop="fullName" label="姓名" width="130"></el-table-column>
            <el-table-column prop="store" label="门店" width="130"></el-table-column>
            <el-table-column prop="role" label="角色" width="130"></el-table-column>
            <el-table-column prop="discountRate" label="折扣率" width="130"></el-table-column>
            <el-table-column prop="lastTime" label="最后登录时间" width="180"></el-table-column>
            <el-table-column prop="lastIP" label="最后登录IP"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ClerkManagement",
  data() {
    return {
      input: "",
      tableData: [
        {
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },{
          uername: "1001",
          fullName: "管理员",
          store: "快餐",
          role: "系统管理员",
          discountRate: "100",
          lastTime: "2019-07-03 21:09:30",
          lastIP: "111.203.254.34",
          phone: "17600129340",
          state: "正常"
        },
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
</style>
