<template>
<div class="tab-control">
  <div v-for="(item,index) in titles" :key="index" :class="{active:index === currentIndex}" @click="tabClick(index)"><span>{{item}}</span></div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    tabClick(index){
      this.currentIndex = index;
    }
  },

  watch: {}

}
</script>

<style scoped>
.tab-control {
  display: flex;
  line-height: 44px;
  height: 44px;
  font-size: 14px;
  background-color: #fff;
}

.tab-control div {
  flex: 1;
  text-align: center;

}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom:2px solid var(--color-high-text);
}
</style>
