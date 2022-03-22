<template>
  <div id="recent">
    <span class="title">最近更新</span>
    <span class="hengxian"></span>
    <a v-for="item in list" :key="item.id" @click="itemClick(item.id)">{{item.name}}</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  methods: {
    itemClick(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
    async getRecent() {
      const res = await this.$article.get('/recent')
      this.list = res.data
    }
  },
  created() {
    this.getRecent()
  }

};
</script>
<style scoped lang='less'>
@import "@/assets/css/common";

#recent {
  margin-top: 4vh;
  padding: 1rem;
  font-weight: bold;
  font-size: @titleSize;
  background-color: white;

  a {
    text-decoration:none;
    display: block;
    font-weight: normal;
    color:black;
    margin-top:0.5rem;
    font-size:@nameSize;
    &:hover {
      color:@hoverColor;
      cursor:pointer
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
    #recent {
      display: none;
    }

  }
</style>