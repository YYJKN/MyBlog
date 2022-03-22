<template>
  <div id="sidebar2">
    <div class="item" @click="thumbUpOrStar('thumbUp')">
      <img src="@/assets/images/thumbUp.png" v-if="!isThumbUp">
      <img src="@/assets/images/thumbUp_active.png" v-else>
    </div>
    <div class="item" @click="thumbUpOrStar('star')">
      <img src="@/assets/images/collection.png" v-if="!isCollection">
      <img src="@/assets/images/collection_active.png" v-else>
    </div>
    <div class="item">
      <img src="@/assets/images/share.png">
    </div>
    <div class="item">
      <img src="@/assets/images/copyLink.png">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isThumbUp: false,
        isCollection: false
      };
    },
    methods: {
      async thumbUpOrStar(type) {
        if(!this.$auth()) {
          return
        }
        const id = this.$route.query.id
        const data = {type, id, email: this.$store.state.userInfo.email}

        if (type == 'thumbUp') {
          if(this.isThumbUp == true) {
            await this.$article.post('/cancelThumbUpOrStar',data)
            this.$message.success("取消点赞成功")
            this.isThumbUp = false
          }else {
            await this.$article.post('/thumbUpOrStar',data )
            this.$message.success("点赞成功")
            this.isThumbUp = true
          }

        } else if (type == 'star') {
          if(this.isCollection == true) {
            await this.$article.post('/cancelThumbUpOrStar',data)
            this.$message.success("取消收藏成功")
            this.isCollection = false

          }else {
            await this.$article.post('/thumbUpOrStar', data)
            this.$message.success("收藏成功")
            this.isCollection = true
          }
        }
      },
      async getCaozuo2Info() {
        let data = {
          email: JSON.parse(localStorage.userInfo).email,
          articleId: this.$route.query.id,
        }
        const res = await this.$article.post('/sideBar', data)
        this.isThumbUp = res.data.info.thumbUp
        this.isCollection = res.data.info.star
      }
    },
    mounted() {
      this.getCaozuo2Info()
    }
  };
</script>
<style scoped lang="less">
  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;

    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    background-color: white;

    img {
      height: 60%;
      width: 60%
    }

    &:hover {
      cursor: pointer;
    }

  }
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    #sidebar2 {
      display: none;
    }
  }
</style>
