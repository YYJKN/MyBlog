<template>
  <div id="list">
    <el-button type="primary" class="fabuBtn" @click="issueClick">发布评论</el-button>

    <div class="box" v-if="isShowIssue">
      <div class="leftBox">
        <div class="left">
          <img alt="" :src="$baseURL + '/' +this.$store.state.userInfo.avatar">
        </div>
      </div>
      <div class="right">
        <!--        <span class="name">辜月十二</span>-->
        <el-input type="textarea" placeholder="请留下你的评论" v-model="comment">
          请留下你的留言
        </el-input>
        <el-button type="primary" @click="issueComment" class="submit">确定</el-button>
      </div>
    </div>

    <div class="box" v-for="(item,index) in list" :key="index">
      <div class="leftBox">
        <div class="left">
          <img alt="" :src="$baseURL + '/' +item.avatar">
        </div>
      </div>
      <div class="right">
        <span class="name">{{item.username}}</span>
        <span class="content">{{item.content}}</span>
        <div class="dibu">
          <span>时间 {{item.createdAt.split('T')[0]}}</span>
          <span @click="thumbUp(item,1)">点赞 ({{item.thumbUp}})</span>
          <!--          外部的 click-->
          <span @click="itemClick(index,item.id,item.username)">评论 ({{item.childNum}})</span>
        </div>

        <div class="more" v-for="(item2,index2) in list2" v-if="isShow==index">
          <div class="leftBox2">
            <div class="left2">
              <img alt="" :src="$baseURL + '/' +item2.avatar">
            </div>
          </div>
          <div class="right2">
            <span class="name2">{{item2.username}}{{item2.toUsername==item.username?'':'回复:' + item2.toUsername}}</span>
            <span class="content2">{{item2.content}}</span>
            <div class="dibu2">
              <span>时间 {{item2.createdAt.split('T')[0]}}</span>
              <span @click="thumbUp(item2,2)">点赞 ({{item2.thumbUp}})</span>
              <span @click="itemClick2(item2)">评论</span>
            </div>
          </div>
        </div>


        <!--        最底部的二级评论     -->
        <div class="commentToComment" v-if="isShow==index">
          <el-input type="textarea" :placeholder="'回复:' + placeHolder" v-model="comment2">
          </el-input>
          <el-button type="primary" @click="issueComment2(item)" class="submit">确定</el-button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        isShowIssue: false,
        isShow: -1,
        comment: '',
        comment2: '',
        list: [],
        list2: [],
        placeHolder: '',
        item2:{}
      };
    },
    methods: {
      issueClick() {
        this.comment = ''
        this.isShowIssue = !this.isShowIssue
      },
      async thumbUp(item,position) {
        const res =await this.$comment.get('/thumbUp?id=' + item.id)
        this.$message.success(res.data.message)
        if(position==1) {
          this.getComments()
        }else {
          this.getComments2(item.parent)
        }
      },
      async issueComment() {
        if(!this.$auth()) {
          return
        }
        let articleId
        let type
        if(this.$route.query.id) {
          articleId = this.$route.query.id
          type = 'article'
        }else {
          articleId = null
          type = 'comment'
        }
        const data = {
          articleId,
          parent:0,
          type,
          from_user: this.$store.state.userInfo.email,
          content: this.comment
        }
        await this.$comment.post('/create', data)
        this.comment = ''
        this.getComments()
      },
      // 发布二级评论
      async issueComment2(item) {
        if(!this.$auth()) {
          return
        }
        let articleId
        let type
        if(this.$route.query.id) {
          articleId = this.$route.query.id
          type = 'article'
        }else {
          articleId = null
          type = 'comment'
        }

        const data = {
          articleId,
          parent: item.id,
          type,
          from_user: this.$store.state.userInfo.email,
          to_user: this.item2.username?this.item2.username:item.username,
          content: this.comment2
        }
        await this.$comment.post('/create2', data)
        this.comment2 = ''
        this.getComments2(item.id)
      },
      // 显示二级评论
      async itemClick(index, parent,from_user) {
        this.isShow == -1 ? this.isShow = index : this.isShow = -1
        this.getComments2(parent)
        this.placeHolder = from_user
      },
      itemClick2(item2) {
        this.placeHolder = item2.username
        this.item2 = item2
      },
      // 查看一级评论
      async getComments() {
        let data;
        if(this.$route.query.id) {
          data = await this.$comment.get('/comments?id='+this.$route.query.id)
        }else {
          data = await this.$comment.get('/comments')
        }
        this.list = data.data.list.reverse()
      },
      // 查看二级评论
      async getComments2(parent) {
        const data = await this.$comment.get('/comments2?parent=' + parent)
        this.list2 = data.data.list.reverse()
      }
    },
    created() {
      this.getComments()
    }
  }
</script>

<style scoped lang="less">
  @import "@/assets/css/common";
  .fabuBtn {
    width: 100%;
  }
  .box {
    .leftBox {
      width: 5%
    }

    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

    .left {
      border-radius: 20%;
      box-sizing: border-box;
      width: 100%;
      /*padding: 0.2rem;*/
      background-color: white;

      img {
        display: block;
        margin: 0 auto;
        width: 3vw;
        height: 3vw;

        border-radius: 20%;

      }
    }

    .right {
      box-sizing: border-box;
      width: 93%;
      background-color: white;
      padding: 0.5rem;

      .name {
        font-size: @commentName;
        font-weight: bold;
      }

      .content {
        margin-top: 1rem;
        display: block;
      }

      .dibu {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: revert;

        span {
          flex: 1;
          font-size: 0.8rem;
          vertical-align: middle;

          &:hover {
            cursor: pointer;
            color: @hoverColor
          }

        }

        span:nth-child(1) {
          flex: 8
        }
      }

    }
  }

  .more {
    margin-top: 1rem;
    box-sizing: border-box;
    /*background-color: red;*/
    width: 100%;
    display: flex;
    /*border-top:1px solid grey;*/
    justify-content: space-between;

    .leftBox2 {
      width: 5%
    }

    .left2 {
      box-sizing: border-box;
      width: 100%;
      border-radius: 20%;
      background-color: white;
      /*padding: 0.5rem;*/

      img {
        /*position: relative;*/
        display: block;
        margin: 0 auto;
        width: 2vw;
        height: 2vw;
        border-radius: 20%;
      }
    }

    .right2 {
      box-sizing: border-box;
      width: 95%;
      background-color: white;
      padding: 0.5rem;

      .name2 {
        font-size: @commentName;
        font-weight: bold;
      }

      .content2 {
        margin-top: 1rem;
        display: block;
      }

      .dibu2 {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: revert;

        span {
          flex: 1;
          font-size: 0.8rem;
          vertical-align: middle;

          &:hover {
            cursor: pointer;
            color: @hoverColor
          }

        }

        span:nth-child(1) {
          flex: 8
        }
      }

    }

  }

  .submit {
    margin-top: 1rem;
    float: right;
  }

  .commentToComment {
    margin-top: 1rem;
  }
</style>