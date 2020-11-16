<template>
  <div class="cart-list">
  <Scroll class="content">
     <CartListItem v-for="(item,index) in cartList" :product="item" :key="index"/>
  </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from './CartListItem'
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated(){
    
  }
};
</script>
<style scoped>
.cart-list{
 height: calc(100% - 44px - 49px);
}
.content {
  height: 100%;
  overflow: hidden;
}

</style>