<template>
  <div id="app">
    <el-container>
      <el-aside width="100px">
        <leftNav></leftNav>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leftNav from "./components/common/leftNav";
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
  background-color: #e9eef3;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
