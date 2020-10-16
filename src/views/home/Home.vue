<template>
<div id='home'>
  <NavBar class="home-nav">
    <div slot="center">首页</div>
  </NavBar>
 <HomeSwiper :banners="banners"/>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

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
    NavBar,
   HomeSwiper
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
