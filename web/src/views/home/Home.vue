<template>
  <div id="home">
    <Feature></Feature>
    <List id="list"></List>
  </div>
</template>

<script>
  import Feature from './Feature.vue'
  import List from './List.vue'

  export default {
    name: "Home",
    components: {
      Feature,
      List
    }
  }
</script>

<style scoped lang="less">
@import "@/assets/css/common";
#list {
  margin-top: 2vw;
  margin-bottom: @marginBottom;
}
</style>

