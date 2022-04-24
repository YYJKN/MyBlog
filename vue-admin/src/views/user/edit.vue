<template>
  <div>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="用户名:">
        <el-input style="width:200px" v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input style="width: 200px" v-model="userInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <img :src="$baseURL + '/' + userInfo.avatar" alt="" style="width: 100px;height: 100px">
      </el-form-item>
      <el-form-item label="权限">
        {{userInfo.auth==1 ? '管理员':"普通用户"}}
      </el-form-item>
      <el-form-item label="权限设置" label-width="150px">
        <el-switch
          v-model="userInfo.auth"
          active-value="1"
          inactive-value="0"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="设为管理员"
          inactive-text="普通用户"
          @change="change"
        >
        </el-switch>

      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import {userQueryOne,setAuth} from "@/network/apis/user";

  export default {
    name: "edit",
    data() {
      return {
        userInfo: {
          auth:0
        },

      }
    },
    computed: {
    },
    methods:{
      async change(value) {
        const res = await setAuth({auth:value,id:this.$route.query.id})
        this.$message.success(res.data.msg)
      }
    },
    async created() {
      const res = await userQueryOne(this.$route.query.id)
      this.userInfo = res.data.userInfo

    }
  }
</script>

<style scoped>

</style>
