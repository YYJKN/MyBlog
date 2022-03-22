<template>
  <div id="main">
    <div class="content">
      <div class="left">
        <Left></Left>
      </div>
      <div class="right">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
export default {
  name: "Main",
  components: {
    Left,
    Right,
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/common";

#main {
  position: absolute;
  top: @swiperHeight + @zhanweiHeight;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;

  width: 100%;
  background-color: @backgroundColor;
}

.content {
  margin: 0 auto;
  width: 70%;
}

/*文章区域*/
.left {
  float: left;
  box-sizing: border-box;

  width: 70%;
  height: 100%;
  /*background-color: white;*/
}

/*广告区域*/

.right {
  float: right;
  box-sizing: border-box;
  width: 25%;
  /*background-color: white;*/
}
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .content {
      width:100%;
    }
    .left {
      width: 95%;
      margin-left:2.5%;
    }
  }
</style>