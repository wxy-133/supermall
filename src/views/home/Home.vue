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
import {getMultidata} from '../../network/getHome'
export default {
  name: 'Home',
  data() {
    return {
     banners:[],
     recommends:[]
    };
  },
  components: {
    NavBar
  },
  created() {
    getMultidata().then(res=>{
      console.log(res)
      this.banners =res.data.banner.list;
      this.recommends=res.data.recommend.list
    })
  },
}
</script>

<style scoped>
.home-nav {
  background-color: #ff8189;
}
</style>
