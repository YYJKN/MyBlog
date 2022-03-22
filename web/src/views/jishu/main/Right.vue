<template>
  <div id="right">
    <About></About>
    <Recent></Recent>
    <Summary></Summary>
    <!--    <OverView></OverView>-->
  </div>
</template>

<script>
  import About from "@/components/About";
  import Recent from "@/components/Recent";
  import Summary from "@/components/Summary";
  import OverView from "@/components/OverView";

  export default {
    name: "Right",
    components: {
      About,
      Recent,
      Summary,
      OverView
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #right {
    margin-bottom: @marginBottom;
  }
</style>