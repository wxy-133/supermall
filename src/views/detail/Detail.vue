<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contScroll">
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @loadImgEvent="loadImgOk" />
      <DetailParamsInfo :paramInfo="paramInfo" ref="params" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <DetailRecommend :goods="recommends" ref="remmend" />
    </Scroll>
    <DetailBottomBar @addToCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" class="backTop" />
    <!-- <Toast :message="message" :isShow="Show"/>-->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import Scroll from "components/common/scroll/Scroll";
import DetailRecommend from "components/content/goods/DetailRecommend";

import { getDetail, getRecommend } from "network/detail";
import { GoodsInfo, Shop, GoodsParam } from "network/detail";
import { debounce } from "common/util";
import { itemListenerMixin, backTopMixin } from "common/mixin";
// import {mapActions} from 'vuex'

// import Toast from 'components/common/toast/Toast'
export default {
  name: "Detail",
  props: [""],
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      bcFuncTheme: null,
      paramInfo: {},
      commentInfo: {},
      recommends: {},
      itemImgLenser: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // message:'',
      // Show:false
    };
  },
  // mixins: [itemListenerMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    // Toast
  },
  beforeDestroy() {
    this.$bus.$off("goodsImgLoadEvent", this.bcFunc);
    console.log("销毁Detail的bus");
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      //获取顶部轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取宝贝的详细信息
      this.detailInfo = data.detailInfo;
      // 获取商品参数信息
      // this.paramInfo = data.itemParams;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      console.log(this.paramInfo);
      //取出我们的评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      //
    });
    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    });
    //
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0),
        this.themeTopYs.push(this.$refs.params.$el.offsetTop),
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
        this.themeTopYs.push(this.$refs.remmend.$el.offsetTop),
        //
        this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    }, 200);
  },
  // updated() {
  //    this.themeTopYs.push(0),
  //     this.themeTopYs.push(this.$refs.param.$el.offsetTop),
  //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
  //     this.themeTopYs.push(this.$refs.remmend.$el.offsetTop),
  //     console.log(this.themeTopYs);
  // },
  methods: {
    // ...mapActions(['addCart']),
    loadImgOk() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contScroll(position) {
      // console.log(position);
      //获取y值
      const positionY = -position.y;
      // 和主题中的值进行对比，
      // for(let i=0;i<this.themeTopYs.length;i++){
      // i*1 parseInt
      // console.log(i)
      //  }
      //方法1
      // for (let i = 0; i < this.themeTopYs.length; i++) {
      //   let length = this.themeTopYs.length;
      //   if (this.currentIndex!==i&&(i < length - 1 &&
      //       positionY >= this.themeTopYs[i] &&
      //       positionY < this.themeTopYs[i + 1]) ||
      //     (i === length - 1 && positionY >= this.themeTopYs[i])) {
      //     this.currentIndex=i;
      //     this.$refs.nav.currentIndex = this.currentIndex
      //     // console.log(i);
      //   }
      // }
      // 方法2 hack

      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        let length = this.themeTopYs.length;
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //是否显示回到顶部
      this.isShowBackTop = -position.y > 1000;
    },
    addCart() {
      //获取购物车需要展示的信息 图片 标题 描述 价格
      const product ={};
      product.image= this.topImages[0];
      product.title =this.goods.title;
      product.des=this.goods.desc;
      product.price=this.goods.newPrice;
      product.iid=this.iid;
      //将商品添加到购物车
      // this.addCart(product).then(res=>{
      //   console.log(res);
      // })
      this.$store.dispatch('addCart',product).then(res=>{
        // console.log(res) ;
        this.$toast.show(res,2000)
        // console.log(this.$toast)
      });

    }
  },
  mounted() {
    // let newRefresh = debounce(this.$refs.scroll.refresh,100)
    // this.itemImgLenser = ()=>{
    //       newRefresh()
    // }
    // this.$bus.$on('itemImageLoad',this.itemImgLenser)
  },
  deactivated() {
    this.$bus.$off("itemImageLoad", this.itemImgLenser);
  }
};
</script>
<style scoped>
.detail-nav {
  position: relative;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 10;
  background-color: white;
}
#detail {
  position: relative;
  z-index: 9;
  background: white;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.backTop {
  position: absolute;
  bottom: 60px;
  right: 0px;
}
</style>