import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation_type'
export default {
  addCart(context,payload){
    //payload新添加的商品
    let oldProduct= context.state.cartList.find(item=>item.iid===payload.iid)
    // 判断oldProduct
    if(oldProduct){
      context.commit(ADD_COUNT,oldProduct)
    }else{
      payload.count =1
      context.commit(ADD_TO_CART,payload)
    }
  }
}