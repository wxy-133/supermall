import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      //payload新添加的商品
      // let oldProduct=null;
      // for(let item of cartList){
      //  if(item.iid===payload.iid){
      //    oldProduct = item;
      //  }
      // }
      let oldProduct= state.cartList.find(item=>item.iid===payload.iid)
      // 判断oldProduct
      if(oldProduct){
        oldProduct.count+=1;
      }else{
        payload.count =1
        state.cartList.push(payload)
      }
    }
  }

})

export default store



