<template>
    <Swiper >
   <SwiperItem v-for="item in banners">
   <a :href="item.link">
     <img :src="item.image">
   </a>
   </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'
  export default {
    name:'',
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {

      };
    },

    components: {
       Swiper,
    SwiperItem},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>