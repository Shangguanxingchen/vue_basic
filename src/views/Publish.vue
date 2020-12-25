<template>
  <el-form
    label-width="80px"
    :model="form"
    style="width:500px; margin:0 auto"
  >
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Publish",
  data() {
    return {
      form: {
        name: '',
        content: '',
      }
    };
  },
};
</script>

<style scoped>

</style>