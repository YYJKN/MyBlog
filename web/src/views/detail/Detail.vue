<template>
  <div id="detail">
    <!-- <NavBar></NavBar> -->
    <Cover :cover="article.cover"></Cover>
    <Main :content="content" :completeInfo="completeInfo" :article="article"></Main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Cover from "./Main/Cover";
import Main from "./Main/Main";
export default {
  name: "Detail",
  components: {
    NavBar,
    Cover,
    Main,
  },
  data() {
    return {
      article:{},
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
      this.completeInfo = data.data

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
    },
  },
  created() {
    this.viewArticle();
  },
};
</script>

<style scoped>
</style>