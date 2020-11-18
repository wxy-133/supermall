<template>
  <div class="bottom-bar">
    <div class="check-all">
      <CheckButton class="check-btn" :isChecked="isSelectAll"/><span>全选</span>
    </div>
    <div class="totalPrice">合计：{{totalPrice}}</div>
     <div class="buy">去购买({{ totalLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
     
    };
  },
  
  components: {
    CheckButton,
  },
  methods:{

  },
  computed:{
    ...mapGetters(["cartList"]),
    totalPrice(){
      return '$' + this.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price*item.count;
       
      },0).toFixed(2)
    },
    totalLength(){
      return this.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      // return !(this.cartList.filter(item=>item.checked).length)
      // return !this.cartList.find(item=>item.checked)
      if (this.cartList.length == 0) {
        return false;
      } else {
        return this.cartList.every(item => item.checked == true);
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  position: relative;
  bottom: 40px;
  left: 0px;
  right: 0px;
  display: flex;
}
.check-all {
  width: 70px;
  display: flex;
}
.check-btn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top:10px;
  line-height: 20px;
}
.totalPrice{
margin-left:10px
}.buy {
  width: 5rem;
  background-color: #f03;
  color: white;
  margin-left: 2rem;
}

</style>
