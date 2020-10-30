<template>
  <div class="goods">
    <goodsListItem v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
 import goodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data () {
      return {

      };
    },

    components: {
      goodsListItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>