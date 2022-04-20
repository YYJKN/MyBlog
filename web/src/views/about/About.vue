<template>
  <div id="list">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="你是谁" name="1" class="title">
        <div>我叫辜月十二，是一名励志成为前端开发工程师的2022届毕业生。</div>
      </el-collapse-item>
      <el-collapse-item title="你的爱好" name="2" class="title">
        <div>热爱前端相关的技术，会每日学习前端知识。</div>
        <div>关注国内独立游戏开发，平常会做一些 RPG 游戏。</div>
      </el-collapse-item>
      <el-collapse-item title="你的技能" name="3" class="title">
        <div> 1、熟悉Html、Css以及JavaScript，能够根据需求编写出响应式网页；</div>
        <div> 2、熟悉Vue.js框架，了解Vue的响应式、虚拟Dom、模板编译原理；</div>
        <div> 3、了解Node以及express，能够进行简单的前后端分离的开发。</div>
      </el-collapse-item>
      <!--      <el-collapse-item title="你的计划" name="4" class="title">-->
      <!--        <div>远的不说，就说一下30岁之前的计划吧</div>-->
      <!--        <div>现在到2025年做前端，沉淀前端技术，并不断学习以 node 为主的后端技术。</div>-->
      <!--        <div>2025年后考虑做后端开发。</div>-->
      <!--      </el-collapse-item>-->
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "About",
    data() {
      return {
        activeNames: ['1','2','3']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #list {
    /*height: 20vh;*/
    /*padding: 1rem;*/
    padding:0 1rem;
    background-color: white;
    border-radius: 1%;
  }

  .title {
    font-size: 2rem !important;
  }
</style>