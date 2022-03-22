<template>
  <div id="jishi">
    <NavBar2></NavBar2>
    <Main></Main>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import Main from './main/Main'
  import NavBar2 from "./NavBar2";
  import Swiper from "../../components/Swiper";

  export default {
    name: "Jishu",
    components: {
      NavBar,
      Main,
      NavBar2,
      Swiper
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