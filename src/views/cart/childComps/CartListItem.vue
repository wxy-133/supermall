<template>
  <div>
    {{product}}
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
      product:{
        type:Object,
        default(){
          return[]
        }
      }
    },
    data () {
      return {

      };
    },

    components: {},



  }

</script>
<style lang='' scoped>

</style>