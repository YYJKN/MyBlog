<template>
  <div id="layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
  }
}
</script>

<style scoped lang="less">
@import "@/assets/css/common";
#layout {
  position: absolute;
  top:20vh;
  left: 10%;
  width: 70%;
  z-index: 1;
  background-color: @backgroundColor;
}

</style>
