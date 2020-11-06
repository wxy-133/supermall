<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"/>
    <Scroll class="content">
    <DetailSwiper :topImages="topImages"/>
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shop"/>
    <DetailGoodsInfo :detailInfo="detailInfo" @loadImgEvent="loadImgOk"/>
    <DetailParamsInfo :paramInfo="paramInfo"/>
    <div>{{iid}}</div>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper' 
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail} from 'network/detail'
  import {GoodsInfo,Shop,GoodsParam} from 'network/detail'
  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
       iid:null,
       topImages:[],
       goods:{},
       shop:{},
       detailInfo:{},
       bcFuncTheme: null,
       paramInfo:{}
      };
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll,
      DetailParamsInfo
    },
      beforeDestroy() {
    this.$bus.$off("goodsImgLoadEvent", this.bcFunc);
    console.log("销毁Detail的bus");
  },
    created(){
        //保存传入的iid
        this.iid = this.$route.params.iid
        //根据iid请求详情数据
        getDetail(this.iid).then(res=>{
          console.log(res)
          //获取顶部轮播数据
          const data = res.result;
          this.topImages = res.result.itemInfo.topImages
          //获取商品信息
          this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);
          //获取店铺信息
          this.shop = new Shop(data.shopInfo);
          //获取宝贝的详细信息
          this.detailInfo = data.detailInfo;
          // 获取商品参数信息
          // this.paramInfo = data.itemParams;
          // console.log(this.paramInfo)
          this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        })

    },
    methods: {
      loadImgOk() {
      // this.bcFunc();
      // this.bcFuncTheme();
      },
    },
  }
</script>
<style scoped>
.detail-nav{
  position: relative;
  left:0px;
  right:0px;
  top: 0px;
  z-index: 10;
  background-color: white;
}
#detail{
  position:relative;
  z-index: 9;
  background: white;
  height: 100vh;
}
.content{
height: calc(100% - 44px);
}
</style>