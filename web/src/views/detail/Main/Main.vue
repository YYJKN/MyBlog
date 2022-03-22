<template>
  <div id="main">
    <div class="content">
      <div class="left">
        <Left :content="content" :completeInfo="completeInfo" :article="article"></Left>
        <div class="comment" v-if="this.commentIsShow">
          <Comment></Comment>
        </div>
      </div>

      <div class="right">
        <Right></Right>
      </div>
      <div id="sidebar" class="sidebar">
        <SideBar></SideBar>
      </div>

    </div>
  </div>
</template>

<script>
import Left from "./Left";
import SideBar from './SideBar.vue'
import Right from './Right'
import Comment from "@/components/Comment";
  export default {
    props: {
      completeInfo: {},
      content: {},
      article:{}
    },
    name: "Main",
    data() {
      return {
        commentIsShow: false
      }
    },
    watch: {
      content(newV,oldV) {
        this.commentIsShow = true
      }
    },
    components: {
      Left,
      Right,
      SideBar,
      Comment
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #main {
    position: absolute;
    top: @swiperHeight + @zhanweiHeight;
    // left: 50%;
    // transform: translate(-50%, 0);
    margin:0 auto;
    z-index: 1;

    width: 100%;
    background-color: @backgroundColor;
  }

  .content {
    margin: 0 auto;

    width:70%;
  }

  /*文章区域*/
  .left {
    float:left;
    box-sizing: border-box;

    width: 70%;
    background-color: white;

    margin-bottom: 5rem;

    /*background-color: red;*/

  }

  /*广告区域*/

  .right {
    float:right;
    box-sizing: border-box;
    width: 25%;
  }

  .sidebar {
    position:absolute;
    left:10%;
  }

  .sidebar_active {
    position:fixed;
    top:@navbarHeight + @zhanweiHeight;
    left:10%;
  }

.comment {
  float: left;
  box-sizing: border-box;
  width:100%;
  padding:2rem;
  padding-top:5rem;
  background-color:transparent;
}
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .content {
      box-sizing: border-box;
      width: 100%;
    }
    .left {
      width: 98%;
      margin-left:1%
    }
  }
</style>