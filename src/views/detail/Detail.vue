<template>
  <div>
    <div>111</div>
    <div>{{iid}}</div>
  </div>
</template>

<script>

  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
       iid:null
      };
    },

    components: {},
    created(){
        this.iid = this.$route.params.iid
    }

  }

</script>
<style scoped>

</style>