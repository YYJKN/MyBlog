<template>
  <div>
    <el-table :data="articleList" style="width: 100%" :border="true">
      <el-table-column prop="article.id" label="名称" width="50" height="100">
      </el-table-column>
      <el-table-column prop="article.tag" label="标签" width="100"> </el-table-column>
      <el-table-column prop="article.introduction" label="简介" width="">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)"
          >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <page ref="page" :size="size" type="article" @pageQueryFinish="handlePageQueryFinish" style="margin-top: 5vh"></page>
  </div>
</template>

<script>
  import page from "@/components/page";
  import {deleteArticle} from "@/network/apis/article";

  export default {
    name: "index",
    data() {
      return {
        size:5,
        logList:[]
      }
    },
    components:{
      page
    },
    methods: {
      handlePageQueryFinish(data) {
        this.articleList = data
      },
      handleEdit(id) {
        this.$router.push(`/article/edit/${id}`)
      },
      async handleDelete(id) {
        await deleteArticle(id)
        this.$message.success('删除文章成功')
        this.$refs.page.queryList()
      }
    },
  }
</script>

<style scoped>

</style>
