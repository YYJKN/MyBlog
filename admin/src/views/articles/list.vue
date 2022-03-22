<template>
  <div id="list">
    <el-card class="card">
      <el-table :data="tableData" style="width: 100%" :border="true">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      tableData: [],
      size:5,
      total: 100
    };
  },
  methods: {
    async getList(page) {
      let sort = {type:'views'}
      let payLoad = { size: this.size, page, type: "home", sort };
      const res = await this.$article.post('/getPages',payLoad)
      this.total = res.data.total;
      this.tableData = res.data.lists;
    },
    handleEdit(id) {
      this.$router.push(`/edit/${id}`)
    },
    handleDelete(id) {
      this.$article.delete('/delete?id=' + id).then( res => {
        this.$message.success("删除文章成功")
        setTimeout(()=> {
          this.getList()
        },2000)
})
    },
    handleSizeChange(size) {
      this.size = size
      this.getList(1)
    },
    async handleCurrentChange(curPage) {
      this.getList(curPage)
    }
  },
  created() {
    this.getList(1);
  },
};
</script>

<style scoped lang="less">
  #list {
    height:100%;
  }
.card {
  .el-table-column {
    height: 100px !important;
  }
}

  .el-pagination {
    margin-top:20px;
  }
</style>