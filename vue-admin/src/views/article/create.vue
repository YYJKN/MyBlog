<template>
  <div id="create">
      <p style="font-size: 2rem">
        {{ $route.name == "edit" ? "编辑" : "新建" }}文章:
      </p>
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="8rem">
        <div class="box1">
          <el-form-item label="文章名称" prop="title">
            <el-input class="input" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="文章封面">
            <el-upload
              drag
              :action="this.action"
              :on-success="this.coverUpload"
              :on-remove="this.coverRemove">
              <img :src="this.coverURL" alt="" class="up-image" v-if="this.coverURL">
              <div v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>

            </el-upload>
          </el-form-item>

          <el-form-item label="标签" prop="tag">
            <el-select v-model="form.tag">
              <el-option label="Html" value="Html"></el-option>
              <el-option label="Css" value="Css"></el-option>
              <el-option label="JavaScript" value="JS"></el-option>
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="Node" value="Node"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="文章简介" prop="introduction">
            <el-input v-model="form.introduction"></el-input>
          </el-form-item>
        </div>

        <el-form-item label="文章内容" class="content">
          <mavon-editor
            ref="editor"
            v-model="form.markdown"
            @save="contentSave"
            @imgAdd="imgAdd"
            @imgDel="imgDel"
          />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="save">
        {{ $route.name == "edit" ? "编辑保存" : "新建保存" }}
      </el-button>
  </div>
</template>
<script>
  import {createArticle,queryArticleOne,editArticle} from "../../network/apis/article";

  export default {
    data() {
      return {
        form: {},
        coverURL: '',
        action: process.env.NODE_ENV == 'development' ? '/api/img/upload' : 'http://82.156.249.91:4000/img/upload',
        rules: {
          name: [{required: true, message: "请输入文章名", trigger: "blur"}],
          tag: [{required: true, message: "请选择标签", trigger: "blur"}],
          introduction: [{required: true, message: "请输入简介", trigger: "blur"}],
        },
      };
    },
    components: {},
    methods: {
      // 获取文章内容
      contentSave(orgion, render) {
        this.form.markdown = orgion;
        this.form.html = render;
      },
      // 上传封面
      async coverUpload(res) {
        this.coverURL = (process.env.NODE_ENV == 'development' ? '/api/' : 'http://82.156.249.91:4000/') + res.file.filename
        this.form.cover = res.file.filename
      },
      // 删除封面
      coverRemove(file) {
        let name = this.coverURL.split('/')
        name = name[name.length-1]
        this.$imgUpload.delete("/delete?name=" + name).then(res =>{
          this.coverURL = ''
        })
      },
      imgAdd(pos, $file) {
        const fm = new FormData();
        fm.append("file", $file);
        this.$imgUpload.post("/upload", fm).then((res) => {
          console.log(res);
          let url = (process.env.NODE_ENV == 'development' ? '/api/' : 'http://82.156.249.91:4000/') + res.data.file.filename;
          this.$refs.editor.$img2Url(pos, url);
        });
      },
      imgDel(pos) {
        this.$imgUpload.delete("/delete?name=" + pos[0]).then((res) => {
          this.$message.error(res.data.msg);
        });
      },
      // 保存文章
      save() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            // 进行编辑
            if (this.$route.params.id) {
              const res = await editArticle(this.$route.params.id,this.form)
              if (res.status == 200) {
                this.$message.success("编辑成功");
              }
            } else {
              // 进行创建
              const res = await createArticle(this.form)
              if (res.status == 200) {
                this.$message.success("保存成功");
              }
            }
          }
        });
      },
    },
    async created() {
      // 查询单个文章
      if(this.$route.params.id) {
        const res = await  queryArticleOne(this.$route.params.id)
        this.form = res.data.data.article;
        this.coverURL = (process.env.NODE_ENV == 'development' ? '/api/' : 'http://82.156.249.91:4000/') + this.form.cover
      }
    },
  };
</script>
<style scoped>
  .up-image {
    width: 100%;
    height: 100%;
  }
</style>
