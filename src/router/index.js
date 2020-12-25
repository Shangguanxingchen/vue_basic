import Vue from "vue";
import VueRouter from "vue-router";
// import Store from "@/store";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      login: true
    }
    // redirect: {
    //   name: "Login"
    // }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import("../views/Brands.vue")
  },
  {
    path: "/news",
    name: "",
    component: () => import("../views/News.vue"),
    children: [
      {
        path: 'publish',
        name: 'Publish',
        component: () => import("../views/Publish.vue")
      },
      {
        path: 'approved',
        name: 'Approved',
        component: () => import("../views/Approved.vue")
      }
    ]
  },
  {
    path: '/organization',
    name: 'Organization',
    component: () => import("../views/Organization.vue")
  },
  {
    path: '*',
    name: 'Notfound',
    title: '未找到',
    component: () => import("../views/Notfound.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach(async (to, from, next) => {
//   const token = localStorage.getItem('token');
//   const isLogin = !!token;
//   // 进入路由的时候，都要想后端发送token,验证合法不合法
//   // 不管路由需要不需要登录，都需要展示用户信息
//   // 都需要想后端发请求，拿到用户信息
//   const data = await userInfo();
//   Store.commit('chnageUserInfo', data.data);
//   if (to.matched.some(item => item.meta.login)) {  // 需要登录，判断登录状态
//     if (isLogin) {
//       if (data.error === 400) {  // 后端告诉你，登录没成功
//         next({ name: 'Login' });
//         localStorage.removeItem('token');
//         return;
//       }
//       if (to.name === 'Login') {
//         next({ name: 'Home' })
//       } else {
//         next();
//       }
//       return;
//     }
//     // 没登录，进入login，直接进入
//     if (!isLogin && to.name === 'Login') {
//       next();
//     }
//     // 没登录，进入的不是login，跳到login
//     if (!isLogin && to.name !== 'Login') {
//       next({ name: 'Login' })
//     }
//   } else {
//     next();
//   }
// });

export default router;
