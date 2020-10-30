<template>
<div class="wrapper" ref='aaa'>
  <div class="content">
    <h2>category</h2>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li> 
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
  </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'',
    props:[''],
    data () {
      return {
       scroll:null
      };
    },
    create(){
    
    },
    mounted(){
        this.scroll= new BScroll('.wrapper',{

      })
    }

  }

</script>
<style scoped>
.wrapper{
  height: 150px;
  background-color: yellow;
  overflow: hidden;
}
</style>