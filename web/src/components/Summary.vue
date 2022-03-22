<template>
  <div id="summary">
    <span>文章标签</span>
    <span class="hengxian"></span>
    <div class="type">
      <div v-for="(value, key, index) in arr" :key="index">
        <div class="box">
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: {},
    };
  },
  methods: {
    async getCountNum() {
      const res = await this.$article.get("/countNum");
      this.arr = res.data;
    },
  },
  created() {
    this.getCountNum();
  },
};
</script>
<style scoped lang="less">
@import "@/assets/css/common";

#summary {
  margin-top: 4vh;
  padding: 1rem;
  font-weight: bold;
  font-size: @titleSize;
  background-color: white;

  .type {
    font-weight: normal;
    font-size: @nameSize;

    div {
      display: inline-block;
      width: 33%;
      box-sizing: border-box;
      // margin-bottom:1rem;
      border: 1px solid @backgroundColor;
      margin: 0 -1px -1px 0;

      .box {
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        padding-right:1vw;
        border: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
      }

      span:nth-child(2) {
        color:@hoverColor;
      }
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
    #summary {
      display: none;
    }

  }
</style>