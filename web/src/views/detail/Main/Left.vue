<template>
  <div id="left">
    <span class="title">{{ article.name }}</span>
    <div class="icon">
      <span><i class="el-icon-date">{{article.createdAt.split('T')[0]}}</i></span>
      <span class="iconfont icon-redupaixu">{{completeInfo.views}}</span>
      <span><i class="el-icon-chat-dot-round">{{completeInfo.comments}}</i></span>
      <span><i class="el-icon-star-off">{{completeInfo.stars}}</i></span>
    </div>
    <!-- 文章 -->
    <div class="markdown-content" v-html="content2"></div>
  </div>
</template>

<script>
export default {
  props: {
    completeInfo: {},
    content: {},
    article:{}
  },
  name: "Left",
  data() {
    return {
      completeInfo2: "",
      content2: "",
      article2: {}
    };
  },
  watch: {
    completeInfo(newV,oldV) {
      this.completeInfo2 = newV
    },
    content(newV, oldV) {
      this.content2 = newV
    },
    article(newV, oldV) {
      this.article2 = newV
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/common";

#left {
  padding: 1rem;
}
.title {
  display: block;
  font-size: 2rem;
  text-align: center;
}

.icon {
  // 先改变100%为80%，然后使 div 居中
  width: 40%;
  margin: 0 auto;

  margin-top: 0.5rem;
  margin-bottom: 0.6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  /*background-color: red;*/

  span {
    font-size: @articleIcon;
    margin-right: 0.8rem;
  }
}
.active {
  color: rgb(30, 162, 255) !important;
}
</style>

<style lang="less">
  .markdown-content {
    img {
      width: 90%;
      display: block;
      margin:1rem auto;
    }
  }
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    #left {
      box-sizing: border-box;
      width: 100%;
    }
    .el-icon-date {
      display: none;
    }
  }
</style>