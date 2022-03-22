<template>
  <div id="home">
    <Main></Main>
  </div>
</template>

<script>
  import Main from './main/Main'

  export default {
    name: "Home",
    components: {
      Main,
    }
  }
</script>

<style scoped lang="less">
  .navbar_active {
    position: absolute !important;
    background-color: transparent !important;
  }

</style>