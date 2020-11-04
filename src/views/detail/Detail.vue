<template>
  <div id="detail">
    <DetailNavBar/>
    <DetailSwiper :topImages="topImages"/>
    <div>{{iid}}</div>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper' 
  import {getDetail} from 'network/detail'
  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
       iid:null,
       topImages:[]
      };
    },

    components: {
      DetailNavBar,
      DetailSwiper
    },
    created(){
        //保存传入的iid
        this.iid = this.$route.params.iid
        //根据iid请求详情数据
        getDetail(this.iid).then(res=>{
          // console.log(res)
          //获取顶部轮播数据
          this.topImages = res.result.itemInfo.topImages
        })

    }

  }

</script>
<style scoped>

</style>