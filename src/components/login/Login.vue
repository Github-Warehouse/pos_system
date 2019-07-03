<template>
  <div>
    <router-link to="../views/Pos">{{message}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      message: "登录"
    };
  }
};
</script>

<style lang="stylus" scoped></style>
