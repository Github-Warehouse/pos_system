<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#1D8CE0"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="icon iconfont icon-goumai"></i>
            <span slot="title">收银</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="icon iconfont icon-dianpu"></i>
            <span slot="title">店铺</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="icon iconfont icon-hanbao"></i>
            <span slot="title">商品</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="icon iconfont icon-huiyuanqia"></i>
            <span slot="title">会员</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="icon iconfont icon-tongji1"></i>
            <span slot="title">统计</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="icon iconfont icon-gongnengjianyi"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus">
.iconfont {
  font-size: 18px;
  color: #ffffff !important;
}
</style>
