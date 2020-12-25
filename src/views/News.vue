<template>
  <div>
    <el-row class="tac">
      <el-col :span="6">
        <h5>发布消息</h5>
        <el-menu :default-active="this.defaultActive" class="el-menu-vertical-demo">
          <router-link :to="{ name: 'Publish' }">
            <el-menu-item index="/publish">
              <span slot="title">发布消息</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name: 'Approved' }">
            <el-menu-item index="/approved">
              <span slot="title">审核消息</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="12" style="margin-top:150px;">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Publish",
  data() {
    return {};
  },
  updated(){
    console.log(this.defaultActive)
  },
  computed: {
    defaultActive() {
      return "/" + this.$route.path.split("/").reverse()[0];
    },
  },
};
</script>

<style scoped>
.tac {
  margin-top: 20px;
}
</style>