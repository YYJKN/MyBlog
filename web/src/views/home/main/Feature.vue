<template>
  <div id="feature">
    <div class="top">
      <span class="title">精选文章</span>
      <span class="title2" @click="moreClick">更多</span>
      <span
        :class="{ title2: true, active: isActive == index }"
        v-for="(item, index) in arrays"
        :key="index"
        @click="titleClick(index)"
      >
        {{ item }}
      </span>
      <span class="hengxian"></span>
    </div>

    <el-skeleton :loading="isLoading" animated :count="6">
      <template slot="template">
        <div class="skeleton">
          <div class="image">
            <el-skeleton-item class="img" variant="image"></el-skeleton-item>
          </div>
          <!--文章标题和简介-->
          <div class="right">
            <el-skeleton-item
              class="el-skeleton-item"
              variant="p"
            ></el-skeleton-item>
            <el-skeleton-item
              class="el-skeleton-item"
              variant="p"
            ></el-skeleton-item>
            <el-skeleton-item
              class="el-skeleton-item"
              variant="p"
            ></el-skeleton-item>
          </div>
        </div>
        <!--文章封面-->
      </template>

      <template>
        <div>
          <div class="article">
            <div class="item" v-for="item in lists" :key="item.id">
              <!--        文章封面-->
              <div class="image">
                <img :src="$baseURL + '/'+ item.article.cover" alt=""/>
              </div>
              <!--        文章标题和简介-->
              <div class="right">
                <span class="name" @click="itemClick(item.article.id)">{{
                  item.article.name
                }}</span>
                <span class="describe">
                  {{ item.article.introduction }}
                </span>
                <div class="icon">
                  <span class="iconfont icon-redupaixu">{{item.views}}</span>
                  <span><i class="el-icon-chat-dot-round">{{item.comments}}</i></span>
                  <span><i class="el-icon-star-off">{{item.stars}}</i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
  export default {
    name: "FeatureArticle",
    data() {
      return {
        lists: [],
        arrays: ["生活", "技术"],
        isActive: 1,
        isLoading: true,
      };
    },
    methods: {
      // 点击更多
      moreClick() {
        let path = this.isActive == 1 ? "/jishu" : "/life";
        this.$router.push(path);
      },
      // 点击技术
      titleClick(index) {
        this.isActive = index;
        this.getLists(index)
      },
      // 获取文章列表
      async getLists(index=1) {
        let type = index == 1?'home':'life'
        let sort = {type:'views'}
        const res =await this.$article.post('/getPages',{size:6,page:1,type,sort})
        this.lists = res.data.lists
        this.isLoading = false;
      },
      itemClick(id) {
        this.$router.push({
          path: "/detail",
          query: {id},
        });
      },
    },
    created() {
      this.getLists();
    },
  };
</script>

<style scoped lang="less">
  @import "@/assets/css/common";

  #feature {
    padding: 1rem;
    background-color: white;
    border-radius: 1%;
  }

  .top {
    .title {
      font-weight: bold;
      font-size: @titleSize;
    }

    .title2 {
      float: right;
      font-weight: bold;
      font-size: @titleSize;

      &:nth-child(2) {
        margin-left: 1rem;
      }

      &:nth-child(3) {
        margin-left: 1rem;
      }

      &:hover {
        cursor: pointer;
        color: @hoverColor;
      }
    }

    // 设置活跃
    .active {
      color: @hoverColor;
    }

    .hengxian {
      margin-top: 0.5rem;

      display: block;
      height: 0.1rem;
      width: 100%;
      background-color: @backgroundColor;
    }
  }

  .article {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  // 设置文章
  .item {
    box-sizing: border-box;
    margin-top: 1rem;
    width: 50%;
    height: 6rem;
    padding: 0.2rem;
    border: 1px solid @backgroundColor;

    .image {
      width: 40%;
      height: 100%;
      /*padding-bottom:60%;*/
      float: left;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        transition: transform 3s ease-in;

        &:hover {
          transform: scale(1.5);
        }
      }
    }

    // 文章名字和标题
    .right {
      float: right;
      width: 55%;

      span {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-size: @titleSize;
      }

      .name {
        margin-bottom: 1rem;
        font-size: @nameSize;
        font-weight: 800;

        &:hover {
          color: @hoverColor;
          cursor: pointer;
        }
      }

      .describe {
        margin-bottom: 1.3rem;
        font-size: @describeSize;
      }

      .time {
        font-size: 0.5rem;
      }
    }
  }

  .icon {
    display: flex;
    justify-content: left;
    align-items: center;

    span {
      /*color:blue;*/
      font-size: @articleIcon !important;
      margin-right: 0.8rem;
    }
  }

  .skeleton {
    box-sizing: border-box;
    margin-top: 1rem;
    padding: 0.2rem;
    border: 1px solid @backgroundColor;

    width: 50%;
    height: 6rem;
    display: inline-block;

    .image {
      width: 40%;
      height: 100%;
      /*padding-bottom:60%;*/
      float: left;
      overflow: hidden;

      .img {
        width: 100%;
        height: 100%;
        transition: transform 3s ease-in;

        &:hover {
          transform: scale(1.5);
        }
      }
    }

    // 文章名字和标题
    .right {
      float: left;
      margin-left: 2%;
      width: 55%;

      .el-skeleton-item {
        margin-bottom: 2vh;
      }
    }
  }
</style>


<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .item {
      width:100%
    }
  }
</style>

<style lang="less" scoped>
  @media screen and (max-width:1024px) {
    .item {
      width:100%
    }
    .item .right span {
      font-size: 0.8rem;
    }

    .myBtn {
      display: none;
    }
  }
</style>
