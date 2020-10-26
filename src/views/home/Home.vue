<template>
<div id='home'>
  <NavBar class="home-nav">
    <div slot="center">购物街</div>
  </NavBar>
  <HomeSwiper :banners="banners" />
  <RecommendView :recommends="recommends" />
  <FeatureView />
  <tabControl class="tab-control" :titles="titles" />
   <GoodsList :goods="goods['pop'].list"/>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/common/tabControl/TabControl'
//
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import GoodsList from '../../components/content/goods/GoodsList'
// 
import {
  getMultidata,getHomeGoods
} from '../../network/getHome'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款",
        "精选", ],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    tabControl,
    GoodsList
  },
  created() {
    // 一般放主要逻辑

    // 请求多个数据
    this.getMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    getMultidata(){
      getMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
       })
     },
    getHomeGoods(type){
       const page =this.goods[type].page+1//动态获取页码
       getHomeGoods(type,page).then(res=>{
      //  console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;//

    })
    }
  }
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
