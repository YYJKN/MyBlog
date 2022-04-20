<template>
  <div id="app">
    <div  v-if=" $route.path !='/register' && $route.path != '/login' ">
      <NavBar ></NavBar>
    </div>
    <div v-if="$route.path != '/detail'&& $route.path !='/register' && $route.path != '/login' ">
      <Swiper></Swiper>
    </div>
<!--    <router-view></router-view>-->
    <Layout></Layout>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Swiper from "./components/Swiper.vue";
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
      NavBar,
      Swiper,
      Avatar,
      Footer,
      Layout
    },
    mounted() {
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

