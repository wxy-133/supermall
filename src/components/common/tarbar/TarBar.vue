<template>
<div id='tar-bar'>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: '',
  props: [''],
  data() {
    return {

    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}

}
</script>

<style scoped>
#tar-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0px;
  right: 0px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
