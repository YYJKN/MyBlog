<template>
  <div id="index">
    <el-table :data="userList" border width="80vw">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="username" label="用户名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="avatar" label="头像" width="100">
        <template v-slot="{row}">
          <img :src="$baseURL + '/' + row.avatar" alt="" class="avatar">
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="{row}">
          <el-button size="mini" @click="handleEdit(row.id)"
          >查看</el-button
          >
          <el-button size="mini" @click="handleEdit(row.id)"
          >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(row.id)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <page :size="size" type="user" @pageQueryFinish="handlePageQueryFinish" style="margin-top: 5vh"></page>
  </div>
</template>

<script>
  import {userQuery} from "@/network/apis/user";
  import page from "@/components/page";
  export default {
    name: "user",
    data() {
      return {
        userList: [],
        size: 5,
      }
    },
    components:{
      page
    },
    methods: {
      handleEdit(id) {
        this.$router.push({path:'/user/edit',query:{id}})
      },
      handleDelete(id) {

      },
      handlePageQueryFinish(data) {
        this.userList = data.userList
      }
    },
    async created() {
    },


  }
</script>

<style scoped lang="scss">
  #index {

  }
  .avatar {
    width: 50px;
    height: 50px;
  }
</style>
