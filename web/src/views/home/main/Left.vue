<template>
  <div id="left">
    <Feature></Feature>
    <List class="list"></List>
  </div>
</template>

<script>
import Feature from "./Feature";
import List from "./List";
export default {
  name: "Left",
  components: {
    Feature,
    List,
  },
};
</script>

<style scoped lang="less">
  @import "@/assets/css/common";
.list {
  margin-top: 2vw;
  margin-bottom: @marginBottom;
}
</style>

