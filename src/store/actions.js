import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation_type'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //payload新添加的商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前数量加一')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}