<template>
  <div id="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15]"
      :page-size="size2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total2">
    </el-pagination>
  </div>
</template>

<script>
  import {userQuery} from "@/network/apis/user";
  import {queryArticle} from "@/network/apis/article";

  export default {
    name: "page",
    props: {
      size:{
        default:5
      },
      total: {
        default:10
      },
      page: {
        default:1
      },
      type:''
    },
    data() {
      return {
        size2:this.size,
        total2:this.total,
        page2:this.page,
        type2:this.type
      }
    },
    methods: {
      async queryList() {

        let res = {}
        switch (this.type) {
          case 'user':
            res = await userQuery({size:this.size2,page:this.page2})
            this.total2 = res.data.total
            this.$emit('pageQueryFinish',res.data)
            break;
          case 'article':
            res = await queryArticle({size:this.size2,page:this.page2,type:'home',sort:{type:'views'}})
            this.total2 = res.data.total
            this.$emit('pageQueryFinish',res.data.lists)
            break
          default:
            break
        }
      },
      handleSizeChange(size) {
        this.size2 = size
        this.queryList()
      },
      handleCurrentChange(curPage) {
        this.page2 = curPage
        this.queryList()
      }
    },
    created() {
      this.queryList()
    }
  }
</script>

<style scoped>
 #page {
   margin:5vh 0
 }
</style>
