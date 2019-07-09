<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>商品档案</div>
          </el-col>
          <el-col :span="6" :offset="3">
            <el-input placeholder="可输入商品名称、拼音吗查询" v-model="input">
              <el-button slot="append">查询</el-button>
            </el-input>
          </el-col>
          <el-col :span="1" :offset="4">
            <el-button>删除</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>导入</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>编辑</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>复制</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>排序</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>新增</el-button>
          </el-col>
          <el-col :span="1">
            <el-button>云端商品库</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column prop="checkout" label="全选" width="130">
              <el-checkbox v-model="checked"></el-checkbox>
            </el-table-column>
            <el-table-column prop="serialNumber" label="序号" width="130"></el-table-column>
            <el-table-column prop="commodityName" label="商品名称" width="130"></el-table-column>
            <el-table-column prop="number" label="编号" width="130"></el-table-column>
            <el-table-column prop="price" label="价格" width="130"></el-table-column>
            <el-table-column prop="category" label="类别" width="130"></el-table-column>
            <el-table-column prop="state" label="状态" width="130"></el-table-column>
            <el-table-column prop="defaultPrintLabel" label="默认打印标签" width="130"></el-table-column>
            <el-table-column prop="edit" label="编辑">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >删除</el-button>
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
  name: "Commodity",
  data() {
    return {
      input: "",
      tableData: [
        {
          serialNumber: "1",
          commodityName: "粥",
          number: "002",
          price: "15.00",
          category: "菜品",
          state: "正常",
          defaultPrintLabel: "是"
        },
        {
          serialNumber: "1",
          commodityName: "粥",
          number: "002",
          price: "15.00",
          category: "菜品",
          state: "正常",
          defaultPrintLabel: "是"
        },
        {
          serialNumber: "1",
          commodityName: "粥",
          number: "002",
          price: "15.00",
          category: "菜品",
          state: "正常",
          defaultPrintLabel: "是"
        },
        {
          serialNumber: "1",
          commodityName: "粥",
          number: "002",
          price: "15.00",
          category: "菜品",
          state: "正常",
          defaultPrintLabel: "是"
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
</style>
