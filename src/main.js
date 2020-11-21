import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import FastCLick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus =new Vue()
//安装toast
Vue.use(toast)
//解决移动端300ms的延迟
FastCLick.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
