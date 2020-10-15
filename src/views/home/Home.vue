<template>
<div id='home'>
  <NavBar class="home-nav">
    <div slot="center">首页</div>
  </NavBar>
  <h2>home</h2>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: 'Home',
  props: [''],
  data() {
    return {

    };
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  background-color: #ff8189;
}
</style>
