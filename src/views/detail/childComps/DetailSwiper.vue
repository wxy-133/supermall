<template>
    <swiper class="detail-swiper">
     <SwiperItem v-for="item in topImages">
       <img :src="item" alt="">
     </SwiperItem>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name:'',
    props:{
      topImages:{
        default:Array,
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
      SwiperItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>