<template>
  <div id="about" ref="about">
    <div class="avatar">
      <!--      <el-avatar :size="size" ref="avatar">-->
      <!--        <img src="~/assets/images/avatar.png" />-->
      <!--      </el-avatar>-->
      <img src="@/assets/images/avatar.png" alt="" />
    </div>
    <div class="name">辜月十二</div>
    <div class="sign">"路途遥远不能眠"</div>
    <span class="hengxian"></span>
    <div class="wailian">
      <span class="iconfont icon-github" @click="itemClick('github')"></span>
      <span class="iconfont icon-bzhan" @click="itemClick('bz')"></span>
      <span class="iconfont icon-xinlangweibo" @click="itemClick('wb')"></span>
      <span class="iconfont icon-weixin" @click="itemClick('wx')"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 0,
    };
  },
  methods: {
    itemClick(name) {
      switch (name) {
        case "github":
          window.open("https://gitee.com/gyse/");
          break;
        case "bz":
          window.open("https://www.bilibili.com/");
          break;
        case "wb":
          this.$message.warning("暂未开放")
          // window.open("https://www.bilibili.com/");
          break;
        case "wx":
          this.$message.warning("暂未开放")
          // window.open("https://www.bilibili.com/");
          break;
      }
    },
  },
  mounted() {
    // 获取 #about 的宽度，赋值为 size
    this.size = this.$refs.about.offsetHeight * 0.2;
  },
};
</script>
<style scoped lang="less">
@import "@/assets/css/common";

#about {
  height: 100%;
  text-align: center;
  background-color: white;
  padding: 1vh;
}
.avatar {
  /*margin: 0 auto;*/
  /*width: 50%;*/
  img {
    display: block;
    margin: 0 auto;
    height: 15vh;
    border-radius: 50%;
  }
}

.el-avatar {
  margin: 0 auto;
}
.name {
  margin: 2vh;
  font-size: 1.5rem;
}

.sign {
  color: #a590a9;
}

.wailian {
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
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
    #about {
      display: none;
    }

  }
</style>