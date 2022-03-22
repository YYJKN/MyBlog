<template>
  <div id="swiper" @scroll="scroll($event)">
    <div class="swiper">
      <div>
        <img class="img" :src="$baseURL+ '/'+  cover" alt="" />
      </div>
<!--      <span class="title">纸上得来终觉浅</span>-->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  props: {
    cover: "",
  },
  name: "Detail",
  data() {
    return {
      article: {},
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="less">
@import "@/assets/css/common";
// 设置swiper的高度
.swiper {
  height: @swiperHeight;
  width: 100%;
  position: relative;
  overflow: hidden;
  // 背景图片大小
  img {
    /*max-width: 100%;*/
    width: 100%;
    height: 100%;
    position: absolute;
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
    .img {
      width: 100%;
      height: 100%;
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