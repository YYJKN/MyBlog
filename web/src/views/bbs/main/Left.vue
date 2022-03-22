<template>
  <div id="left">
    <List class="list"></List>
  </div>
</template>

<script>
  import List from "./List";
  export default {
    name: "Left",
    components: {
      List
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";
  #left {
    margin-bottom: @marginBottom;
  }
</style>