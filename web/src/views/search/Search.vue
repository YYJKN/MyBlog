<template>
  <div id="list">
    <div class="top">
      <span>搜索结果</span>

      <span class="hengxian"></span>
    </div>
    <el-skeleton :loading="this.isLoading" animated :count="10">
      <template slot="template">
        <div class="skeleton">
          <div class="left">
            <div class="image">
              <el-skeleton-item class="img" variant="image"></el-skeleton-item>
            </div>
          </div>
          <!--      文章标题，内容，简介-->
          <div class="right">
            <el-skeleton-item
              class="name skeleton-item"
              variant="p"
            ></el-skeleton-item>

            <el-skeleton-item
              class="describe skeleton-item"
              variant="p"
            ></el-skeleton-item>
            <!--        以下都为图标-->
            <div class="dibu">
              <el-skeleton-item variant="p" skeleton-item></el-skeleton-item>
            </div>
          </div>
        </div>
      </template>

      <template>
        <div>
          <div class="item" v-for="item in lists" :key="item.id">
            <div class="left">
              <div class="image">
                <img
                  :src="$baseURL + '/'+  item.article.cover"
                  alt=""
                />
              </div>
            </div>
            <!--      文章标题，内容，简介-->
            <div class="right">
              <span class="name" @click="itemClick(item.article.id)">{{
                item.article.name
              }}</span>
              <span class="describe">
                {{ item.article.introduction }}
              </span>
              <!--        以下都为图标-->
              <div class="dibu">
                <div class="icon">
                  <span><i class="el-icon-date">2020-02-11</i></span>
                  <span class="iconfont icon-redupaixu">100</span>
                  <span><i class="el-icon-chat-dot-round">42</i></span>
                  <span><i class="el-icon-star-off">10</i></span>
                </div>
                <el-button type="primary" @click="itemClick(item.id)"
                >点击阅读</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>

    <el-pagination
      style="margin-top: 2rem; text-align: center"
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      @current-change="handleCurrentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    />
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        lists: [],
        isLoading: true,
        total: 100,
        size: 5,
        page: 1,
        type:'Life'
      };
    },

    methods: {
      itemClick(id) {
        this.$router.push({
          path: "/detail",
          query: { id },
        });
      },
      async getPages() {
        const res = await this.$article.post("/queryKeyword", {
          keyword:this.$route.query.keyword,
          size: this.size,
          page: this.page,
        });
        this.lists = res.data.lists;
        this.total = res.data.total;
        this.isLoading = false;
      },
      handleCurrentChange(index) {
        this.isLoading = true
        this.page = index;
        this.getPages();
      },
      prevClick(index) {
        this.isLoading = true
        this.page = index;
        this.getPages(index);
      },
      nextClick() {
        this.isLoading = true
        this.page = index;
        this.getPages(index);
      },
    },
    watch: {
      $route(to,from) {
          if(to.name == 'search'){
            this.getPages()
          }

      }
    },
    created() {
      this.getPages();
    },
  };
</script>

<style scoped lang="less">
  @import "@/assets/css/common";
  @import "@/assets/css/common";

  #list {
    /*height: 20vh;*/
    width:70%;
    margin:0 auto;
    padding: 1rem;
    background-color: white;
    border-radius: 1%;

    margin-top:@zhanweiHeight;
    margin-bottom:@marginBottom
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

  .item {
    margin-top: 1rem;
    border: 1px solid @backgroundColor;
    padding: 0.2rem;

    height: 8rem;
  }

  .left {
    height: 100%;
    width: 30%;
    float: left;
    .image {
      height: 100%;
      overflow: hidden;
      img {
        /*max-width: 100%;*/

        width: 100%;
        height: 100%;
        transition: transform 3s ease-in;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .right {
    float: right;
    width: 65%;
    height: 100%;
    span {
      display: block;
    }
    .name {
      margin-bottom: 1rem;
      font-weight: 800;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: @nameSize;

      &:hover {
        color: @hoverColor;
        cursor: pointer;
      }
    }

    .describe {
      font-size: @describeSize;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 1rem;
    }
  }

  // 设置icon 图标

  .dibu {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    display: flex;
    justify-content: left;
    align-items: center;
    /*background-color: red;*/

    span {
      font-size: @articleIcon;
      margin-right: 0.8rem;
    }
  }

  .skeleton {
    margin-top: 1rem;
    border: 1px solid @backgroundColor;
    padding: 0.2rem;
    height: 8rem;

    .left {
      height: 100%;
      width: 30%;
      float: left;
      .image {
        height: 100%;
        overflow: hidden;
        .img {
          /*max-width: 100%;*/
          width: 100%;
          height: 100%;
        }
      }
    }
    .skeleton-item {
      margin-bottom: 2rem;
    }
  }
  .top {
    span {
      font-weight: bold;
      font-size: @paixiSize;
      margin-right: 1vw;
    }

    .hengxian {
      margin-top: 0.5rem;
      display: block;
      height: 0.1rem;
      width: 100%;
      background-color: @backgroundColor;
    }
  }
</style>
