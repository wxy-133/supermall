<template>
<div id='home'>
  <NavBar class="home-nav">
    <div slot="center">购物街</div>
  </NavBar>
  <HomeSwiper :banners="banners" />
  <RecommendView :recommends="recommends" />
  <FeatureView />
  <ul>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>

    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>

  </ul>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import {
  getMultidata
} from '../../network/getHome'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    getMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
  },
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: #ff8189;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px
}
</style>
