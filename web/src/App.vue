<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import Avatar from "./components/Avatar.vue";
  import Footer from "./views/footer/Footer";
  import Layout from './layout/Layout'

  export default {
    name: "App",
    data() {
      return {
        dialogVisible: true,
      };
    },
    components: {
      Avatar,
      Footer,
      Layout
    }
  };
</script>

<style lang="less">
  @import "assets/css/normalize.css";
  @import "assets/css/content.css";
  @import "assets/css/common";
  @import "assets/css/animate.min.css";
  @import "assets/css/myElement.css";
  @import "assets/icon/iconfont.css";
  @import "assets/css/media";

  body {
    margin:0;
    padding:0;
    width: 100vw;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: @backgroundColor;
  }

</style>

