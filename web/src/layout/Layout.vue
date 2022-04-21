<template>
  <div id="layout">
    <NavBar></NavBar>
    <Swiper></Swiper>
    <JishuNavBar v-if="$route.path=='/jishu'"></JishuNavBar>
    <div id="right">
      <About></About>
      <Recent></Recent>
      <OverView></OverView>
    </div>
    <div id="left">
      <router-view></router-view>
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
  import JishuNavBar from "../components/JishuNavBar";

  export default {
    name: "index",
    components: {
      NavBar,
      Swiper,
      About,
      Recent,
      OverView,
      JishuNavBar
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #layout {
    margin-bottom: 20vh;
    background-color: @backgroundColor;
  }
  #left {
    overflow: hidden;
    padding-left: 10vw;
    padding-right: 5vw;
    margin-top:@zhanweiHeight;
  }

  #right {
    float:right;
    width:20%;
    margin-top:@zhanweiHeight;
    margin-right:10vw;
  }

</style>
