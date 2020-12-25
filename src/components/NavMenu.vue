<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-demo"
    mode="horizontal"
    active-text-color="#00acec"
  >
    <el-menu-item index="/"
      ><router-link :to="{ name: 'Home' }">Home</router-link></el-menu-item
    >
    <el-menu-item index="/brands"
      ><router-link :to="{ name: 'Brands' }">Brands</router-link></el-menu-item
    >
    <el-menu-item index="3">Offices</el-menu-item>
    <el-menu-item index="4">History</el-menu-item>
    <el-menu-item index="5">Innovation</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {};
  },
  updated() {
    console.log(this.defaultActive)
  },
  computed: {
    defaultActive() {
      return "/" + this.$route.path.split("/").reverse()[0];
    },
  },
  methods: {},
};
</script>

<style scoped>
.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 55px;
  line-height: 80px;
}
</style>