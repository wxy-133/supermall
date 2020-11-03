<template>
  <div>
     <nav-bar>
      <div slot="left" class="back" @clic="backCLick">
       <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div class="title" 
        v-for="(item,index) in titles" 
        :class="{active:index === currentIndex}"
        @click="titleClick(index)"
        :key="index">
        {{item}}</div>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name:'DetailNavBar',
    props:[''],
    data () {
      return {
        titles:[
          '商品','参数','评论','推荐'
        ],
        currentIndex:0
      };
    },
    components: {
      NavBar
    },
    methods:{
      backCLick(){
        this.$router.back();
        // this.$router.go(-1)
      },
      titleClick(index){
        // console.log('11')
        this.currentIndex = index
      }
    }

  }

</script>
<style  scoped>
.titles{
  display: flex;
  font-size: 13px;
}
.titles .title{
  flex:1
}
.active{
  color:var(--color-high-text)
}
.back{

}
.back img{
  margin-top: 10px;
}
</style>