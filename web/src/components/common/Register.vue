<template>
  <div id="register">

    <el-card class="box1">
      <div>
        <div class="welcome">
          欢迎注册
        </div>
        <el-form :rules="rules" :model="model" ref="form">

<!--          <el-form-item>-->
<!--            <div class="avatar">-->
<!--              <img src="@/assets/images/avatar.png" alt="">-->
<!--              <el-button type="primary">-->
<!--                选择头像-->
<!--              </el-button>-->
<!--            </div>-->
<!--          </el-form-item>-->

          <el-form-item prop="username">
            <el-input class="register" type="text" v-model="model.username" prefix-icon="el-icon-user"
                      placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item prop="email">
            <el-input class="register" type="text" v-model="model.email" prefix-icon="el-icon-message"
                      placeholder="请输入邮箱"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input class="register" type="password" v-model="model.password" prefix-icon="el-icon-lock"
                      placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item prop="password2">
            <el-input class="register" type="password" v-model="model.password2" prefix-icon="el-icon-lock"
                      placeholder="请再次输入密码"></el-input>
          </el-form-item>

<!--          <el-form-item class="item1">-->
<!--            <el-input class="register input1" type="text" v-model="model.yzm"></el-input>-->
<!--            <el-button v-if="show" @click="sendMail">发送邮箱验证码</el-button>-->
<!--            <el-button v-else>{{count}}</el-button>-->

<!--          </el-form-item>-->


          <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
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
      var validPass = (rule, value, callback) => {
        if (value != this.model.password)
          return this.$message.error('两次密码不一致，请重新输入')
        return callback()
      }

      return {
        show: true,
        count: '',
        timer: null,

        model: {username: '', email: '', password: '', password2: '', yzm: ''},
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}],
          email: [{required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}],
          password2: [{required: true, validator: validPass, trigger: 'blur'}]
        },

      }
    },

    methods: {
      // 发送邮件
      async sendMail() {
        const TIME_COUNT = 1
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT)
              this.count--
            else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }

        // if(this.model.email){
        // 	const {data} = await this.$axios.get(`user/sendemail?email=${this.model.email}`)
        // }
      },

      //  注册账号
      register() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            const {data} = await this.$user.post('/register', this.model)
            if (data.code == 440)
              return this.$message.error('邮箱已经存在，请重新注册')
            this.$message.success("注册成功，请登录")
            this.$router.push('/login')
          }
        })

      }

    },

  }
</script>

<style scoped lang="less">

  #register {
    width: 100%;
    height: 100vh;
    background: url('./img/bg.jpg');
    background-attachment: fixed;
    background-size: cover;

  }


  .box1 {
    background-color: transparent;
    opacity: 0.9;
    padding: 0 !important;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      margin-right: 4%
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

  #navbar {
    display: none;
  }

  .avatar {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: inline-block;
      width:30%;
      border-radius: 50%;
    }
    .el-button {
      width: 65%;
    }
  }
</style>