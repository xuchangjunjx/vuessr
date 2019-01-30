<template>
  <div>
    <h1>home</h1>
    <div class="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  asyncData({ store, route }) {
    let id = route.query.id;
    if (id) {
      let result =  store.dispatch("fetchItem", id);
      return result;
    }
  },
  name: "home",
  data() {
    return {};
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
       return this.$store.state.items;
     // return this.$store.state.items[this.$route.params.id]
    }
  }
};
</script>