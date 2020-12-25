<template>
  <div class="login-section">
    <!-- <div class="centerImg">
      <img class="img1" src="../assets/img/lbx.png" alt="">
    </div>
    <div class="centerImg">
      <img class="img2" src="../assets/img/jt.png" alt="">
    </div> -->
    <div class="icon_gif">
      <img src="../assets/img/aigei.gif" alt="">
    </div>
    <el-form 
      label-position="right"
      label-width="100px"
      :rules="rules" status-icon 
      :model="ruleForm" 
       ref="ruleForm" 
       style="width:500px; margin:200px auto;"
    >
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <el-form-item v-show="flag">
        <slide-verify 
          :l="42"
          :r="20"
          :w="360"
          :h="200"
          slider-text="向右滑动"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          class="slide-box"
          ref="slideBlock"
        ></slide-verify>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      msg: "",
      flag: false
    };
  },
  created() {
  },
  methods: {
    // 点击登录校验-拼图出现
    submitForm(formName) {
      this.$refs[formName].validate( (valid) => {
        if (valid) {
          this.flag=true;
          // let res = "qwert"
          // this.$store.commit("getUserInfo", res);
          // window.location.href = '/';
          // 在这里向后端发送登录用户名和密码
        //   login({
        //     name: this.ruleForm.name,
        //     password: this.ruleForm.password
        //   }).then((data) => {
        //     if(data.code === 0) {  // 成功
        //       localStorage.setItem('token', data.data.token);
        //       window.location.href = '/';
        //     }
        //     if(data.code === 1){
        //       this.$message.error(data.mes);
        //     }
        //   })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    // 拼图成功
    onSuccess (){
      this.getLogin()
    },
    // 拼图失败
    onFail (){
      this.msg = '请重试!'
    },
    // 拼图刷新
    onRefresh (){
      this.msg = ''
    },
    // 登录请求接口
    getLogin () {
        let res = "qwert"
        this.$store.commit("getUserInfo", res);
        window.location.href = '/';
      // const loginData = {
      //   account: '',
      //   phone: this.ruleForm.userName,
      //   // Password: sha3.sha3_256(md5(this.ruleForm.password)), // 加密
      //   password: this.ruleForm.password,
      //   email: '',
      //   accountType: 2, // 登录类型手机号
      //   checkCode: ''
      // }
      // 接口
      // userLogin(loginData)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(res => {
      //     console.log(res)
      //   })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.flag=false;
    }
  }
}
</script>

<style>
.login-section {
  background: url("../assets/img/bs1.jpg");
  background-size: cover;
  height: 100%;
}
.centerImg {
  height: 100vh;
  width: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50vh;
  margin-left: -50vh;
  /* transform: translate(-50%,-50%); */
}
.img1{
    animation:img1 10s linear infinite;
    opacity: 0.1;
}
@keyframes img1{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}
.img2{
    animation:img2 2s linear infinite;
    opacity: 0.2;
}
@keyframes img2{
    0%{transform:rotate(360deg);}
    100%{transform:rotate(0deg);}
}
.icon_gif {
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.7;
}
</style>
