<template>
  <div id="toc2">
    <span class="title">文章目录</span>
    <span class="hengxian"></span>
    <div id="toc">
      <div v-for="(item, index) in toc" :key="index">
        <a
          :class="{ active: index == activeIndex }"
          :href="'#' + item.text"
          :id="'a' + item.level"
          @click="aClick(index)"
        >{{ item.text }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        toc:[],
        activeIndex: 0,
      };
    },
    methods: {
      aClick(index) {
        this.activeIndex = index;
      }
    },

    mounted() {
      this.$bus.$on('getToc',(toc)=>{
        this.toc = toc
      })
    }

  };
</script>
<style scoped lang='less'>
  @import "@/assets/css/common";

  .toc_active {
    position: fixed;
    top:@navbarHeight;
    width: 17vw;
  }

  #toc2 {
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
      font-size:1rem;
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


  #toc {
    box-sizing: border-box;
    left: -1vw;
    padding-top: 0.2rem;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    background: white;
    max-height: 45vh;
    overflow-y: auto;
    a {
      color: black;
      text-decoration: none;
      display: block;
      margin-bottom: 0.4rem;
      font-weight: 500;
    }

    a:hover {
      color: rgb(30, 162, 255);
    }

    #a3 {
      font-size: 1rem;
    }

    #a4 {
      font-size: 0.8rem;
      margin-left: 0.8rem;
    }

    #a5 {
      font-size: 0.6rem;
      margin-left: 1rem;
    }
  }

</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    #toc2 {
      display: none;
    }
  }
</style>