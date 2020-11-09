<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control   class="tab-control2"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" 
                   ref="tabOffsetTop1"
                   v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @imagsLoad="imagsLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" 
                   ref="tabOffsetTop2"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultidata, getHomeGoods } from "network/home"
  import {debounce} from 'common/util'
  import {itemListenerMixin} from 'common/mixin'
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    mixins:[itemListenerMixin],
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //
      
    },
    mounted(){
         //监听图片加载
      
      //tabcontrol的tabOffsetTop
        
      // this.tabOffsetTop=this.$refs.tabOffsetTop.$el.offsetTop
      
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      //  debounce(func,delay){
      //   let timer = null
      //   return function(...args){
      //    if(timer) clearTimeout(timer)
      //    timer = setTimeout(()=>{
      //      func.apply(this,args)
      //    },delay)
      //   }
      //  },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabOffsetTop1.currentIndex = index;
        this.$refs.tabOffsetTop2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        //1.判断我们的backtop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 决定tabcontrol是否吸顶（position:fixed）
        // console.log(this.tabOffsetTop)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      imagsLoad(){
         //
           this.tabOffsetTop=this.$refs.tabOffsetTop2.$el.offsetTop
          //  console.log(this.tabOffsetTop)
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          console.log(res)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1//当前页码加一
        getHomeGoods(type, page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1; //当前页码
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();
      this.$bus.$off('itemImageLoad',this.itemImgLenser)
    },
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    /*
    position: sticky;
    top: 44px;
    z-index: 9;*/
  }
  .tab-control2{
    position: relative;
    left:0px;
    right:0px;
    z-index: 1;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
