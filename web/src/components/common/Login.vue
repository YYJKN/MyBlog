<template>
  <div id="login">
    <el-card class="box1">
      <div>
        <div class="welcome">
          欢迎登录
        </div>
        <el-form>
          <el-form-item>
            <el-input class="register" type="text" v-model="model.email" prefix-icon="el-icon-email" placeholder="请输入邮箱"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input class="register" type="password" v-model="model.password" prefix-icon="el-icon-lock" placeholder="请输入密码" @keydown.enter.native="login()"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>

          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div>

</template>

<script>
	export default {
		name: "Register",
		data() {
      return {
      	model: {}
      }
		},

    methods: {
			async login() {
				const {data} = await this.$user.post('/login', this.model)
        this.$message.success(data.message)

        // 存储 store
				this.$store.commit('updateUserInfo',data.userInfo)
        localStorage.token = data.token
				this.$router.push('/index')

			}
    }



	}
</script>

<style scoped lang="less">

  #login {
    width: 100%;
    height: 100vh;
    background: url('./img/bg.jpg');
    background-attachment: fixed;
    background-size: cover;

  }

  .box1 {
    background-color:transparent;
    opacity: 0.9;
    padding: 0 !important;
    position: absolute;
    top: 40% ;
    left: 50% ;
    transform: translate(-50%, -50%) ;
    width: 350px;
    text-align: center;
    .welcome {
      padding-bottom: 20px;
      font-size: 20px;
      color: black;

    }
  }

  .item1 {
    width: 100%;
    /*background: red;*/
    .el-input {
      width: 48%;
      margin-right:4%
    }
    .el-button {
      width: 48%;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .el-button {
    width: 100%;
  }

  .el-card {
    border: none;
  }


  </style>