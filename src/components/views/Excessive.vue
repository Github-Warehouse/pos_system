<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <leftNav></leftNav>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leftNav from "../common/leftNav";
export default {
  name: "App",
  components: {
    leftNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style>
.el-aside {
  text-align: center;
  background-color: #1d8ce0;
}

.el-main {
  background-color: #ffffff;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
