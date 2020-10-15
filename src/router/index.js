import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
const Home = ()=>import("../views/home/Home.vue")
const Category = ()=>import("../views/category/Category.vue")
const Cart = ()=>import("../views/cart/cart.vue")
const My = ()=>import("../views/my/my.vue")
//安装插件
Vue.use(Router)
//创建路由对象
const routes=[
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/my",
    component:My
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

// 导出
export default router