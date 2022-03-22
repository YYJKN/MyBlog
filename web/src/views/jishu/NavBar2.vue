<template>
  <div id="navbar2">
    <div class="left">
      <div  :class="{item:true,active:isActive==index}" v-for="(item,index) in menu" :key="index" @click=itemClick(item,index)>{{item[1]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar3",
  data(){
    return {
      isActive:0,
      menu:[['html','Html'],['css','Css'],['js',"JS"],['vue','Vue'],['node','Node']]
    }
  },
  methods: {
    itemClick(item,index) {
      this.isActive = index
      this.$bus.$emit('navBar2Click',item)
    },

    panduan() {
      document.querySelector("#navbar2").classList.remove("navbar");
      document.querySelector("#navbar2").classList.add("navbar_active");
    },

    handleScroll() {
      if(this.$route.path != '/jishu')
        return
      let scrollTop = window.pageYOffset;
      if (scrollTop >= window.innerHeight * 0.3) {
        document.querySelector("#navbar2").classList.add("navbar");
        document.querySelector("#navbar2").classList.remove("navbar_active");

      } else {
        document.querySelector("#navbar2").classList.remove("navbar");
        document.querySelector("#navbar2").classList.add("navbar_active");
      }
    },
  },
  mounted() {
    this.panduan();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/common";
#navbar2 {
  position: fixed;
  top: @navbarHeight;
  z-index: 100;

  background-color: white;
  height: 5vh;

  width: 100%;
  border-top: 1px solid @backgroundColor;

  box-shadow: 0 1px 1px 1px beige;
}

.left {
  margin-left: 10%;

  height: 100%;
  display: flex;

  /*background-color: blue;*/
  justify-content: left;
  align-items: center;
  align-content: center;

  .item {
    // 设置字体大小
    font-size: 0.9rem;
    margin-right: 2vw;
    &:hover {
      cursor: pointer;
      color: @hoverColor;
    }
  }
}
  .navbar_active {
  position: absolute;
  width: 100%;
  z-index: 100;

  // 设置 navbar 的高度
  height: @navbarHeight;
  background-color: transparent;
  color:white;
  border-top:0 !important;
  box-shadow: none !important;
}

.active {
  color: @hoverColor;
}
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .left {
      margin-left:10%;
      width:90%;
      justify-content: center;
      .item {
        flex:1
      }
    }


  }
</style>