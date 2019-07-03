<template>
  <div>
    <router-link to="/">{{message}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      message: "注册"
    };
  }
};
</script>

<style lang="stylus" scoped></style>
