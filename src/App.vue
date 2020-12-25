<template>
  <div id="app">
      <el-container style="height: 100%;" direction="vertical">
        <Header v-if='this.$route.path!="/login"'/>
        <router-view></router-view>
      </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: "app",
  components: {
    Header,
  }
}
</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff;
}
a {
  text-decoration: none;
   color: #606266;
}
a:hover {
  color: #66b1ff;
}
.router-link-active {
  text-decoration: none;
}

</style>
