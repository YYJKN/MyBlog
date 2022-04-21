<template>
  <div id="layout">
    <NavBar></NavBar>
    <Swiper></Swiper>
    <div id="left">
      <router-view></router-view>
    </div>
    <div id="right">
      <About></About>
      <Recent></Recent>
      <OverView></OverView>
    </div>
  </div>

</template>

<script>
  import NavBar from "@/components/NavBar";
  import Swiper from "@/components/Swiper.vue";
  import Avatar from "../components/Avatar";
  import About from "../components/About";
  import Recent from "../components/Recent";
  import OverView from "../components/OverView";

  export default {
    name: "index",
    components: {
      NavBar,
      Swiper,
      About,
      Recent,
      OverView
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #left {
    /*position: absolute;*/
    float:left;
    margin-left: 8vw;

    margin-top:@zhanweiHeight;
    /*left: 10%;*/
    width: 60%;
    /*z-index: 1;*/
    background-color: @backgroundColor;
  }

  #right {
    margin-top:@zhanweiHeight;
    overflow: hidden;
    padding-left:5vw;
    padding-right:8vw;
  }

</style>
