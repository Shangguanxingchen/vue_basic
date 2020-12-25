<template>
  <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <!-- <img src="../assets/1.jpg" alt=""> -->
    <el-carousel>
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      imgs:[require("../assets/img/1.jpg"),require("../assets/img/2.jpg"),require("../assets/img/3.jpg"),require("../assets/img/4.jpg")]
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>