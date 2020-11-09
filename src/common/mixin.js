import {debounce} from 'common/util'
export const itemListenerMixin = {
  data(){
    return {
      itemImgLenser:null
    }
  },
  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh,500)
         this.itemImgLenser=()=>{
          newRefresh()
        }
      this.$bus.$on('itemImageLoad',this.itemImgLenser)
      console.log('min---')
  },
}