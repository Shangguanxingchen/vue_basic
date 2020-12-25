<template>
  <div class="breadcrumb">
    <h3>NEWS</h3>
    <el-breadcrumb separator="|">
      <el-breadcrumb-item>Nov.</el-breadcrumb-item>
      <el-breadcrumb-item>Oct.</el-breadcrumb-item>
      <el-breadcrumb-item>Sep.</el-breadcrumb-item>
      <el-breadcrumb-item  :to="{ path: '/' }">More</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class="bottom clearfix">
        <time class="time">12344</time>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
  margin-bottom: 5px;
}
.breadcrumb {
  margin-top: 30px;
}
.el-breadcrumb {
  padding-bottom: 10px;
  border-bottom: 1px solid #303133;
}
</style>

