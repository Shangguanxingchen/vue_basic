<template>
  <el-card class="box-card">
    <div v-for="o in 7" :key="o" class="text item">
      <time class="time" style="float:left; margin-right:20px;">{{ currentDate }}</time>
      <span style="float: left; color: red">News</span>
      <span style="text-align: left;">{{'新闻标题 ' + o }}</span>
    </div>
  </el-card>
</template>
<script>

  export default {
    name: "TabItem",
    components: {
        
    },
    data() {
      return {
        currentDate:"2020-12-12"
      };
    },
    methods: {
      
    }
  };
</script>

<style scoped>
.el-card {
  border: none;
}
</style>