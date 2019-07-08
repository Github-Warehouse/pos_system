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
          <router-link to="/">
            <el-menu-item index="1">
              <i class="icon iconfont icon-goumai"></i>
              <span slot="title">收银</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="icon iconfont icon-dianpu"></i>
              <span slot="title">店铺</span>
            </template>
            <el-menu-item-group>
              <router-link to="/views/StoreManagement">
                <el-menu-item index="1-1">门店管理</el-menu-item>
              </router-link>
              <router-link to="/views/ClerkManagement">
                <el-menu-item index="1-2">店员管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link to="/views/Commodity">
            <el-menu-item index="3">
              <i class="icon iconfont icon-hanbao"></i>
              <span slot="title">商品</span>
            </el-menu-item>
          </router-link>
          <router-link to="/views/Member">
            <el-menu-item index="4">
              <i class="icon iconfont icon-huiyuanqia"></i>
              <span slot="title">会员</span>
            </el-menu-item>
          </router-link>
          <router-link to="/views/Statistics">
            <el-menu-item index="5">
              <i class="icon iconfont icon-tongji1"></i>
              <span slot="title">统计</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="6">
            <template slot="title">
              <i class="icon iconfont icon-gongnengjianyi"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item-group>
              <router-link to="/views/PersonalAccount">
                <el-menu-item index="1-1">个人账号</el-menu-item>
              </router-link>
              <router-link to="/views/DataCleaning">
                <el-menu-item index="1-2">数据清理</el-menu-item>
              </router-link>
              <router-link to="/views/PaymentSettings">
                <el-menu-item index="1-3">支付设置</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus">
.iconfont {
  font-size: 18px;
  color: #ffffff !important;
}

a {
  text-decoration: none;
}
</style>
