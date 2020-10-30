<template>
<div>
  <NavBar>
    <div slot="center">购物车</div>
  </NavBar>
  <h2>购物车</h2>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name: "Cart",
  data() {
    return {

    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
