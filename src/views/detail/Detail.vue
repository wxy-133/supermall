<template>
  <div id="detail">
    <DetailNavBar/>
    <div>{{iid}}</div>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
       iid:null
      };
    },

    components: {
      DetailNavBar
    },
    created(){
        this.iid = this.$route.params.iid
    }

  }

</script>
<style scoped>

</style>