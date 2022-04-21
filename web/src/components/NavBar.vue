<template>
  <div>
    <div class="navbar" id="navbar">
      <div class="box">
        <div class="left" id="navbar-left">
          <div class="item" v-for="(item, index) in menu" :key="index">
            <span
              :class="{ active: $route.path == item[0] }"
              @click="itemClick(item)"
            >{{ item[1] }}</span
            >
          </div>
        </div>
        <div class="middle">
          <el-input
            v-model="keyword"
            class="item search"
            size="mini"
            placeholder="请输入内容,按 Enter 进行搜索"
            prefix-icon="el-icon-search"
            @keyup.enter.native="keywordQuery"
          >
          </el-input>
        </div>
        <div class="right" id="right">
          <div v-if="!avatarShow">
            <span class="item" @click="login">登录</span>
            <span class="item" @click="register">注册</span>
          </div>
          <div v-else>
            <div class="avatar">
              <el-dropdown @command="commandClick">
                <img alt="" :src="$baseURL + '/' + this.$store.state.userInfo.avatar">
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="avatar">更换头像</el-dropdown-item>
                  <!--                  <el-dropdown-item command="collection">我的收藏</el-dropdown-item>-->
                  <el-dropdown-item command="signout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Avatar :dialogVisible.sync="dialog"></Avatar>
  </div>
</template>

<script>
  import Avatar from "./Avatar";
  export default {
    name: "NavBar",
    components:{
      Avatar
    },
    data() {
      return {
        keyword: '',
        isActive: false,
        dialog:false,
        menu: [
          ["/index", "首页"],
          ["/jishu", "技术"],
          ["/life", "生活"],
          ["/about", "关于"],
          ["/bbs", "留言板"],
        ],
      };
    },
    computed: {
      keywordQuery() {
        this.$router.push({
          path: "/search",
          query: {
            keyword: this.keyword.replace(/\s/g, "")
          },
        });
      },
      avatarShow() {
        return this.$store.state.userInfo.email != undefined
      }
    },
    methods: {
      itemClick(item) {
        this.$router.push(item[0]);
      },
      login() {
        this.$router.push('/login')
      },
      register() {
        this.$router.push('/register')
      },

      commandClick(command) {
        switch (command) {
          case 'signout':
            this.$store.commit('updateUserInfo', {})
            localStorage.removeItem('userInfo')
            break
          case 'avatar':
            this.dialog = true
            break
        }
      },

      panduan() {
        document.querySelector("#navbar").classList.remove("navbar");
        document.querySelector("#navbar").classList.add("navbar_active");
        document.querySelector("#navbar-left").classList.add("left_active");
        document.querySelector("#right").classList.add("left_active");
      },

      handleScroll() {
        // let aboutHeight = document.querySelector("#about").offsetHeight
        let scrollTop = window.pageYOffset;

        if (scrollTop >= window.innerHeight * 0.25) {
          document.querySelector("#navbar").classList.add("navbar");
          document.querySelector("#navbar").classList.remove("navbar_active");
          document.querySelector("#navbar-left").classList.remove("left_active");
          document.querySelector("#right").classList.remove("left_active");

          // sidebar 的占位
          let path = this.$route.path
          // if (path == '/detail') {
          //   document.querySelector("#sidebar").classList.add("sidebar_active");
          //   document.querySelector("#sidebar").classList.remove("sidebar");
          //   if (scrollTop > window.innerHeight * 0.48 + aboutHeight) {
          //     document.querySelector("#toc2").classList.add('toc_active')
          //   } else {
          //     document.querySelector("#toc2").classList.remove('toc_active')
          //   }
          // }

        } else {
          document.querySelector("#navbar").classList.remove("navbar");
          document.querySelector("#navbar").classList.add("navbar_active");
          document.querySelector("#navbar-left").classList.add("left_active");
          document.querySelector("#right").classList.add("left_active");

          // sidebar 的占位
          let path = this.$route.path
          if (path == '/detail') {
            document.querySelector("#sidebar").classList.add("sidebar");
            document.querySelector("#sidebar").classList.remove("sidebar_active");
          }


        }
      },
    },
    mounted() {
      this.panduan();
      window.addEventListener("scroll", this.handleScroll);
    },
  };
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  .navbar {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    // 设置 navbar 的高度
    height: @navbarHeight;
    background-color: white;
    box-shadow: 0 1px 1px 1px beige;
  }

  // 直接设置不起效，需要再套一层
  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 100%;
  }

  .left {
    flex: 1;
    /*background-color: red;*/
    margin-left: 5%;
    /*width: 25%;*/
    height: 100%;
    display: flex;

    justify-content: left;
    align-items: center;
    align-content: center;

    color: black;

    .item {
      // 设置字体大小
      font-size: @navbarFontSize;
      margin-right: 2vw;

      &:hover {
        cursor: pointer;
        color: @hoverColor;
      }
    }
  }

  .active {
    color: @hoverColor;
  }

  .navbar_active {
    position: absolute;
    width: 100%;
    z-index: 100;

    // 设置 navbar 的高度
    height: @navbarHeight;
    background-color: transparent;
  }

  .left_active {
    color: white;
  }

  .middle {
    flex: 1;
    margin-left: -2vw;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-start;

    .item {
      // 设置字体大小
      font-size: @navbarFontSize;

      &:nth-child(1) {
        margin-left: 10vw;
      }

      &:nth-child(2) {
        margin-left: 2vw;
      }

      &:hover {
        cursor: pointer;
        color: @hoverColor;
      }
    }
  }

  .avatar {
    margin-left: 10vw;

    img {
      border-radius: 50%;
      width: 2vw;
      height: 2vw;
    }
  }
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .left {
      width:100%;
      justify-content: space-around;
    }
    .middle {
      display:none
    }

    #right {
      display: none;
    }



  }
</style>