<template>
  <div id="jishi">
    <List></List>
  </div>
</template>

<script>
  import List from "./List";

  export default {
    name: "Jishu",
    components: {
      List
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
.navbar_active {
    position: absolute !important;
    background-color: transparent !important;
  }
</style>