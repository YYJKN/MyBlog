<template>
    <div id="detail">
      <span class="title">{{ article.name }}</span>
      <div class="icon">
        <span><i class="el-icon-date">{{article.createdAt.split('T')[0]}}</i></span>
        <span class="iconfont icon-redupaixu">{{completeInfo.views}}</span>
        <span><i class="el-icon-chat-dot-round">{{completeInfo.comments}}</i></span>
        <span><i class="el-icon-star-off">{{completeInfo.stars}}</i></span>
      </div>
      <!-- 文章 -->
      <div class="markdown-content" v-html="content" v-if="article.name"></div>

      <Comment class="comment"></Comment>

    </div>
</template>

<script>
  import Comment from "@/components/Comment";
export default {
  name: "Detail",
  components: {
    Comment
  },
  data() {
    return {
      article:{
        createdAt:''
      },
      content: {},
      completeInfo: {}
    }
  },
  methods: {
    // 查询文章
    async viewArticle() {
      const id = this.$route.query.id;
      const { data } = await this.$article.get(`/edit/${id}`);
      this.article = data.data.article;

      this.$bus.$emit('getSwiperImg',this.article.cover)
      this.completeInfo = data.data

      this.makeToc()

    },
    // 生成toc
    makeToc() {
      let toc = [];
      const renderer = {
        // <h${level} id="${text}">
        heading(text, level) {
          toc.push({ text, level });
          return `
            <a id="${text}" class="title" style="position: relative; top: -4rem;display: block;height: 0; overflow: hidden;"></a>
            <h${level} >
              ${text}
            </h${level}>`;
        },
      };
      this.$marked.use({ renderer });
      this.content = this.$marked.parse(this.article.markdown);
      this.$bus.$emit('getToc',toc)
    }
  },
  created() {
    this.viewArticle();
  },
};
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #detail {
    padding: 1rem;
    background-color: white;
    border-radius: 1%;
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

  .comment {
    margin-top:8rem;
    margin-bottom: 4rem;
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
