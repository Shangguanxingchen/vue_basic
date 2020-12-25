<template>
  <el-container>
    <el-main>
      <Carousel />
      <Tabs />
    </el-main> 
    <el-aside width="450px">
      <el-input
        placeholder="Search"
        prefix-icon="el-icon-search"
      ></el-input>
      <hr style="width:60%; border:1px solid #303133;">
      <div class="system">
        <h3>Platform Links</h3>
        <el-tag>ITSM</el-tag>
        <el-tag type="success">BPM</el-tag>
        <el-tag type="info">DEC</el-tag>
        <el-tag type="warning">IPOS</el-tag>
        <el-tag type="danger">DF</el-tag>
        <el-tag>BI</el-tag>
        <el-tag type="warning">IPOS</el-tag>
        <el-tag type="danger">DF</el-tag>
        <el-tag>BI</el-tag>
        <!-- <el-tag type="danger">DF</el-tag>
        <el-tag>BI</el-tag> -->
      </div>
      <div class="company">
        <h3>About Company</h3>
        <div class="about_company">
          <el-link href="https://www.bestseller.com.cn/" target="_blank" :underline="false">青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</el-link>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="company">
        <h3>About Organization</h3>
        <div class="about_company">
          <router-link :to="{name:'Organization'}">
            <span>Organization</span>
          </router-link>
        </div>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
// import BreadCrumb from '@/components/BreadCrumb.vue';
import Tabs from '@/components/Tabs.vue';
export default {
  name: "Home",
  components: {
    Carousel,
    // BreadCrumb,
    Tabs,
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
}
.el-aside {
  padding: 20px;
}
.el-input {
  width: 60%;
  margin: 30px;
}
.system {
  padding: 20px;
  height: 37%;
  margin: 0px 30px;
  overflow: auto;
}
.el-tag {
  width: 60px;
  height: 35px;
  margin: 15px;
}
.company {
  padding: 10px;
  margin: 5px 30px 10px 30px;

}
.about_company {
  margin-top: 25px;
}
</style>