import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutaions'
import actions from './actions'
//安装插件
Vue.use(Vuex)
//创建store对象
const state = {
  cartList:[]
}
const store = new Vuex.Store({
  state,
  mutations,
  actions

})

export default store



