<template>
  <div id="left">
    <el-menu router :default-openeds="['1']" default-active="list">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-tickets"></i>文章管理</template>
        <el-menu-item-group>
          <el-menu-item index="/create">新建文章</el-menu-item>
          <el-menu-item index="/list">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
#left {
  height: 100%;
  background-color: #e9eef3;
}

.el-menu {
  // background-color: #e9eef3;
}
</style>