import {debounce} from 'common/util'
import BackTop from "components/content/backTop/BackTop";
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
export const backTopMixin={
  components:{BackTop},
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}