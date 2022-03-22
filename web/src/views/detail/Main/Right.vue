<template>
  <div id="right">
    <About></About>
    <Toc></Toc>
  </div>
</template>

<script>
  import About from "@/components/About";
  import Recent from "@/components/Recent";
  import Summary from "@/components/Summary";
  import OverView from "@/components/OverView";
  import Toc from "./Toc";

  export default {
    name: "Right",
    components: {
      About,
      Toc
    }
  }
</script>

<style scoped lang="less">
  @import "src/assets/css/common";
  .toc_active {
    position:fixed;
    margin-top:0 !important;
    top: @zhanweiHeight + @navbarHeight - 2rem;
  }

</style>