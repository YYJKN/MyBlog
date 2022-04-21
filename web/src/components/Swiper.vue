<template>
  <div id="swiper" @scroll="scroll($event)">
    <div class="swiper">
      <img :src="$baseURL+ '/'+  cover"  ref="swiperImg"/>
<!--      <span class="title">{{ sign }}</span>-->
      <!--      class="icon animate__animated animate__slow animate__fadeInDown animate__infinite"-->
      <!-- <div class="icon" @click="handleClick">
        <img src="./b.png" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      cover:'280b887e7a96fcd1c0f54dd27aed5ab8'
    }
  },
  methods: {
    handleClick() {
      window.scrollTo(0, window.innerHeight * 0.4);
    },
  },
  computed: {
    sign() {
      switch (this.$route.path) {
        case "/index":
          return "有朋自远方来";
        case "/jishu":
          return "路途遥远不能眠";
        case "/about":
          return "君子藏器于身，待时而动";
        default:
          return "有朋自远方来";
      }
    },
  },
  mounted() {
    this.$bus.$on('getSwiperImg',(cover) =>{
      this.cover = cover
      console.log(cover)
    })
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/common";
// 设置swiper的高度
.swiper {
  height: @swiperHeight;
  position:relative;
  width: 100%;  
  overflow: hidden;
  // 背景图片大小
  img {
    width: 100%;
    height: 100%;
    /*height: 150%;*/
  }
  .title {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: @swiperFontSize;
    color: white;
    z-index: 1;
  }

  .icon {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: @swiperIcon;
    height: @swiperIcon;

    animation: icon 2s ease-in infinite;

    z-index: 1;
    // icon 图片大小
    img {
      width: 100%;
      height: 100%;
      position: absolute !important;
    }
  }
}

@keyframes icon {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<style lang="less" scoped>

</style>