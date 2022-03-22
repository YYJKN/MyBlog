<template>
  <div id="overview">
    <span>网站概述</span>
    <span class="hengxian"></span>
    <div class="type">
      <span>文章</span>
      <span>标签</span>
      <span>留言</span>
      <span>评论</span>
      <span>访问</span>
      <span>运行</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
@import "@/assets/css/common";

#overview {
  margin-top: 4vh;
  padding: 1rem;
  font-weight: bold;
  font-size: @titleSize;
  background-color: white;

  .type {
    font-weight: normal;
    font-size: @nameSize;

    span {
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      padding: 0.5rem;
      // margin-bottom:1rem;
      border: 1px solid @backgroundColor;
      margin: 0 -1px -1px 0;
    }
  }
}

.hengxian {
  margin: 0.5rem 0;
  display: block;
  height: 0.1rem;
  width: 100%;
  background-color: @backgroundColor;
}
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    #overview {
      display: none;
    }

  }
</style>