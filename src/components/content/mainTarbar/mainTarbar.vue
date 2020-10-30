<template>
<TarBar>
  <TarBarItem path="/home" activeColor="#ff8189">
    <img slot='item-icon' src="../../../assets/img/tabbar/home.svg" alt="">
    <img slot="itme-icon-active" src="../../../assets/img/tabbar/home_active.svg">
    <div slot='item-text'> 首页</div>
  </TarBarItem>
  <TarBarItem path="/category" activeColor="#ff8189">
    <img slot='item-icon' src="../../../assets/img/tabbar/category.svg" alt="">
    <img slot="itme-icon-active" src="../../../assets/img/tabbar/category_active.svg">
    <div slot='item-text'> 精选</div>
  </TarBarItem>
  <TarBarItem path="/cart" activeColor="#ff8189">
    <img slot='item-icon' src="../../../assets/img/tabbar/shopcart.svg" alt="">
    <img slot="itme-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg">
    <div slot='item-text'>购物车 </div>
  </TarBarItem>
  <TarBarItem path="/my" activeColor="#ff8189">
    <img slot='item-icon' src="../../../assets/img/tabbar/profile.svg" alt="">
    <img slot="itme-icon-active" src="../../../assets/img/tabbar/profile_active.svg">
    <div slot='item-text'> 我的</div>
  </TarBarItem>
</TarBar>
</template>

<script>
import TarBar from '../../common/tarbar/TarBar.vue'
import TarBarItem from '../../common/tarbar/TarBarItem.vue'
export default {
  name: '',
  props: [''],
  data() {
    return {

    };
  },
  components: {
    TarBar,
    TarBarItem
  }

}
</script>

<style scoped>

</style>
