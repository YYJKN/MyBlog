<template>
  <div id="main">
    <div class="top">
      <top></top>
    </div>
    <div class="left">
      <left></left>
    </div>
    <div class="right">

      <router-view></router-view>

    </div>
  </div>
</template>
<script>
  import top from "./top";
  import left from "./left";

  export default {
    data() {
      return {};
    },
    components: {
      top,
      left,
    },
  };
</script>
<style scoped lang="less">
  #main {
    height: 100vh;
    position: relative;
  }

  .top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 10%;

    background-color: #b3c0d1;
  }

  .left {
    position: absolute;
    top: 10%;
    height: 90%;
    width: 20%;
    background-color: #b1becf
  }

  .right {
    position: absolute;
    top: 10%;
    left: 20%;
    height: 90%;
    width: 80%;
    overflow-y: scroll;
  }
</style>