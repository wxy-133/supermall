<template>
  <div id="detail">
    <DetailNavBar/>
    <DetailSwiper :topImages="topImages"/>
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shop"/>
    <div>{{iid}}</div>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper' 
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import {getDetail} from 'network/detail'
  import {GoodsInfo,Shop} from 'network/detail'
  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
       iid:null,
       topImages:[],
       goods:{},
       shop:{}
      };
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    created(){
        //保存传入的iid
        this.iid = this.$route.params.iid
        //根据iid请求详情数据
        getDetail(this.iid).then(res=>{
          // console.log(res)
          //获取顶部轮播数据
          const data = res.result;
          this.topImages = res.result.itemInfo.topImages
          //获取商品信息
          this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);
          //获取店铺信息
          this.shop = new Shop(data.shopInfo);
        })

    }

  }
</script>
<style scoped>

</style>