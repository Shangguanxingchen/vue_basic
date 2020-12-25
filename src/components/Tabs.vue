<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Nov." name="first"><TabItem /></el-tab-pane>
    <el-tab-pane label="Oct." name="second"><Carousel /></el-tab-pane>
    <el-tab-pane label="Sep." name="third">角色管理</el-tab-pane>
    <el-tab-pane label="More" name="forth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import Carousel from "@/components/Carousel.vue";
import TabItem from "@/components/TabItem.vue";
export default {
  name: "Tabs",
  components: {
    Carousel,
    TabItem,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  created() {
    this.updateType();
  },
  methods: {
    updateType() {
      let type = this.$route.query.type;
      //通过拿到的值不同，更改activeName的值
      if (type === "1") {
        this.activeName = "first";
      } else if (type === "2") {
        this.activeName = "second";
      } else if (type === "3") {
        this.activeName = "third";
      } else if (type === "4") {
        this.activeName = "forth";
      }
    },
    // 切换tab时再根据标签名的不同将url中的参数值改掉
    handleClick(tab) {
      let queryType;
      if (tab.name == "first") {
        queryType = 1;
      } else if (tab.name == "second") {
        queryType = 2;
      } else if (tab.name == "third") {
        queryType = 3;
      } else if (tab.name == "forth") {
        queryType = 4;
      }
      //将新的值和url放在一起拼成一个完整的路径
      this.$router.push({
        path: "/",
        query: {
          type: queryType || 1,
        },
      });
    },
  },
};
</script>

<style scoped>
.el-tabs {
  margin-top: 30px;
}
/deep/.el-tabs__item::after {
  content: "";
  height: 60%;
  display: inline;
  vertical-align: middle;
  border-right: 1px solid #303133;
  position: relative;
  left: 20px;
}
</style>