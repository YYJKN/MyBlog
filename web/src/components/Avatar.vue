<template>
  <div>
    <el-dialog
      title="更换头像"
      width="70%"
      :visible.sync="isShow"
      :before-close="handleClose">

      <el-radio-group v-model="avatarVal">
        <el-radio :label="index" v-for="(item,index) in list">
          <img :src="$baseURL  + '/'+  item" alt="" class="avatar">
        </el-radio>
      </el-radio-group>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateAvatar">确 定</el-button>
        <el-button @click="cancelClick">取 消</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    props:{
      dialogVisible:''
    },
    data() {
      return {
        avatarVal: 0,
        list: [],
      };
    },
    computed: {
      isShow: {
        get() {
          return this.dialogVisible
        },
        set(newV) {
          
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$emit('update:dialogVisible',false)
        done()
      },
      cancelClick() {
        this.$emit('update:dialogVisible',false)
      },
      async updateAvatar() {
        let data = {
          avatarVal:this.avatarVal,
          email:this.$store.state.userInfo.email
        }
        let res = await this.$img.post('/updateAvatar',data)
        this.$store.state.userInfo.avatar = res.data.avatar
        this.$message.success("更换头像成功")
      },
       async getAvatarList() {
        const res = await this.$img.get('/avatarLists')
        this.list = res.data.list
      }
    },
    created() {
      this.getAvatarList()
    }
  }
</script>

<style scoped>
  .avatar {
    width: 10vw;
  }

  .btn {
    width: 20%;
    margin: 0 auto
  }
</style>