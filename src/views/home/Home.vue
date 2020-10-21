<template>
<div id='home'>
  <NavBar class="home-nav">
    <div slot="center">购物街</div>
  </NavBar>
  <HomeSwiper :banners="banners" />
  <RecommendView :recommends="recommends" />
  <FeatureView />
  <tabControl class="tab-control" :titles="titles" />
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
import tabControl from '../../components/common/tabControl/TabControl'
//
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
// 
import {
  getMultidata
} from '../../network/getHome'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款",
        "精选"
      ]
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    tabControl
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
.tab-control{
  position: sticky;
  top:44px;
}
</style>
