<template>
  <el-header>
    <el-row class="bb1">
      <el-col :span="4"
        ><img
          src="../../public/bestseller.png"
          alt=""
          style="vertical-align: middle"
      /></el-col>
      <el-col :span="12"><NavMenu /></el-col>
      <el-col :span="8">
        <el-select v-model="value" style="width: 85px" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-badge :value="6" class="item">
          <el-button
            size="middle"
            class="el-icon-message-solid"
            circle
          ></el-button>
        </el-badge>
        <span style="position: absolute; right: 100px">｜</span>
        <div id="user" v-if="userInfo">
          <div class="login">{{ userInfo }}</div>
          <div class="userOption">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-user"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="publish">
                  <router-link :to="{ name: 'Publish' }">发布新闻</router-link>
                </el-dropdown-item>
                <el-dropdown-item command="logout">登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div id="user" v-else>
          <router-link :to="{ name: 'Login' }">
            <span class="login">登录</span>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
export default {
  name: "Header",
  components: {
    NavMenu,
  },
  data() {
    return {
      options: [
        {
          value: "zh-CN",
          label: "zh-CN",
        },
        {
          value: "en-US",
          label: "en-US",
        },
      ],
      value: "zh-CN",
    };
  },
  updated() {
    console.log(this.value);
  },
  computed: {
    userInfo: function () {
      return this.$store.getters.userInfo;
    },
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        this.logout();
      }
    },
    logout() {
      this.$confirm("真的确定要登出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // const data = await login_out();
          localStorage.removeItem("userInfo");
          window.location.href = "/login";
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.el-header {
  line-height: 60px;
}
.bb1 {
  border-bottom: 1px solid #023b2f;
}
/deep/.el-menu {
  font-weight: bold;
}
/deep/.el-badge__content.is-fixed {
  top: 20px;
  right: 30px;
}
.el-badge {
  padding: 0 20px;
  position: absolute;
  right: 120px;
}
.login {
  position: absolute;
  right: 50px;
  width: 50px;
}
.userOption {
  position: absolute;
  right: 10px;
  width: 50px;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 16px;
}
/deep/.el-select--mini {
  float: left;
}
</style>