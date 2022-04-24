<template>
  <div id="layout">
    <NavBar></NavBar>
    <Swiper></Swiper>
    <JishuNavBar v-if="$route.path=='/jishu'"></JishuNavBar>
    <div id="right">
      <About></About>
      <Toc v-if="$route.path=='/detail'"> </Toc>
      <template v-else>
        <Recent></Recent>
        <Summary></Summary>
      </template>

    </div>
    <div id="left">
      <SideBar v-if="$route.path=='/detail'"></SideBar>
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
  import Summary from "@/components/Summary";
  import SideBar from "../views/detail/Main/SideBar";
  import Toc from "../views/detail/Main/Toc";
  export default {
    name: "index",
    components: {
      NavBar,
      Swiper,
      About,
      Recent,
      OverView,
      JishuNavBar,
      Summary,
      SideBar,
      Toc
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #layout {
    margin-bottom: 20vh;
    /*background-color: blue;*/
    background-color: @backgroundColor;
  }
  #left {
    overflow: hidden;
    padding-left: 15vw;
    padding-right: 5vw;
    margin-top:@zhanweiHeight;
  }

  #right {
    /*background-color: red;*/
    float:right;
    width:20%;
    margin-top:@zhanweiHeight;
    margin-right:15vw;
  }

</style>
