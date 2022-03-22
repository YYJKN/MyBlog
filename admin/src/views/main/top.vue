<template>
  <div id="top">
    <div class="title">博客后台</div>
    <el-dropdown class="dropdown">
      <img src="~assets/images/avatar.png" alt="" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang='less'>
.title {
  float: left;
  width: 30%;
  height: 100%;

  margin-left: 1rem;
  line-height: 10vh;
  font-size: 1.5rem;
}
.dropdown {
  float: left;
  display: block;
  width: 60%;
  img {
    height: 8vh;
    float: right;
    border-radius: 50%;
    position: relative;
    transform: translate(1vh,1vh);
  }
}
</style>