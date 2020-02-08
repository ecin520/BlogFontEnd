<template>
    <div id="EditArticle">
<!--      <h1>{{this.$route.params.id}}</h1>-->
      <mavon-editor
        class="animated bounce fadeInDown"
        style="position: absolute;width: 100%;height: 100%;"
        v-model = "article.content"
        @imgAdd = "$imgAdd"
        ref="md"
        :toolbars = "toolbars"
        :ishljs = "true"
        :tabSize = 4
        @save = "SaveContent"
        placeholder = "Begin your editor..."></mavon-editor>

      <Modal
        v-model="noteModalVisible"
        :closable="false"
        :loading="loading"
        :z-index="10000"
        footer-hide>
        <Row>
          <h1 style="text-align: center">发布文章</h1>
        </Row><br>
        <Row>
          <Col span="4"><h3>文章标题</h3></Col>
          <Col span="20">
            <Input v-model="article.title" placeholder="Title" />
          </Col>
        </Row><br>
        <Row>
          <Col span="4"><h3>展示内容</h3></Col>
          <Col span="20">
            <Input v-model="article.generalize" type="textarea" placeholder="Generalize" />
          </Col>
        </Row><br>
        <Row>
          <Col span="4"><h3>展示图片</h3></Col>
          <Col span="20">
            <Input v-model="article.show_image" type="textarea" placeholder="Generalize" />
          </Col>
        </Row><br>
        <Row>
          <div style="display: flex;justify-content: center;">
            <Button style="margin: 10px;" @click="selectTypeName">请选择标签</Button>
            <Button style="margin: 10px;" @click="selectBranchName">请选择类型</Button>
          </div>
        </Row>
        <br>
        <Row>
          <h2 style="text-align: center">是否加入推荐文档</h2>
        </Row>
        <Row>
          <div style="display: flex;justify-content: center;">
            <RadioGroup style="margin: 10px;" v-model="article.recommend" type="button">
              <Radio label="Yes"></Radio>
              <Radio label="No"></Radio>
            </RadioGroup>
          </div>
        </Row>
        <br>
        <Row>
          <div style="display: flex;justify-content: center;">
            <Button type="info"  @click="submitForm">提交</Button>
          </div>
        </Row>
      </Modal>

      <Modal
        v-model="typeModalVisible"
        :closable="false"
        :loading="loading"
        :z-index="10001"
        :styles="{width: '230px',top: '220px'}"
        footer-hide>
        <RadioGroup v-model="article.type_name">
          <Radio v-for="typeName in typeNameGroup" :label="typeName.type_name" :key="typeName.type_name.index"></Radio>
        </RadioGroup>
      </Modal>

      <Modal
        v-model="branchModalVisible"
        :closable="false"
        :loading="loading"
        :z-index="10009"
        :styles="{width: '230px',top: '220px'}"
        footer-hide>
        <RadioGroup v-model="article.branch_name">
          <Radio v-for="branchName in branchNameGroup" :label="branchName.branch_name" :key="branchName.branch_name.index"></Radio>
        </RadioGroup>
      </Modal>
    </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  export default {
    data(){
      return{
        article: [
          {
            'title': '',
            'generalize': '',
            'content': '',
            'article_url': '',
            'type_name': '',
            'branch_name': '',
            'show_image': '',
            'recommend': ''
          }
        ],
        article_title: '',
        noteModalVisible: false,
        typeModalVisible: false,
        branchModalVisible: false
      }
    },
    methods: {
      SaveContent(value,render){
        this.noteModalVisible = true
      },
      selectTypeName(){

        this.$axios({
          url: this.$store.state.host+'/type/selectAllType',
          method: 'get'
        }).then(response=>{
          this.typeNameGroup=response.data;
          this.typeModalVisible = true;
        }).catch(error=>{
          this.$Message.error(error)
        });


      },
      selectBranchName(){

        this.$axios({
          url: this.$store.state.host+'/branch/selectAllBranch',
          method: 'get'
        }).then(response=>{
          this.branchNameGroup=response.data;
          this.branchModalVisible = true;
        }).catch(error=>{
          this.$Message.error(error)
        });


      },
      submitForm(){

      },
      $imgAdd(pos,$file){

        let formdata = new FormData();
        formdata.append('file',$file);
        this.$axios({
          url: this.$store.state.host+'/fileUpload/imageUpload',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response=>{
          this.$Message.info(response.data);
          // alert(response.data);
          this.$refs.md.$img2Url(pos,response.data)
          // $mv.$img2Url(pos,url);
        });

      },
      submitForm(){

        this.$axios({
          url: this.$store.state.host+'/article/updateArticle',
          method: 'post',
          data: {
            id: this.article.id,
            title: this.article.title,
            generalize: this.article.generalize,
            content: this.article.content,
            article_url: this.article.article_url,
            type_name: this.article.type_name,
            branch_name: this.article.branch_name,
            show_image: this.article.show_image,
            recommend: this.article.recommend === 'Yes' ? 1:0
          }
        }).then(response=>{
          this.$Message.success('提交成功');
          this.$router.push({path: '/ArticleList'});
        }).catch(error=>{
          this.$Message.error('Error')
        })

      }

    },
    created() {
      let params = new FormData();
      params.append('id',this.$route.params.id);
      this.$axios({
        url: this.$store.state.host+'/article/getArticleById',
        method: 'post',
        params: {
          id: this.$route.params.id
        }
      }).then(response=>{
        this.article = response.data;
        if (this.article.recommend === '1') {
            this.recommend = 'Yes';
        } else {
            this.recommend = 'No';
        }
      }).catch(error=>{
        this.$Message.error(error);
      })
    }
  }
</script>

<style scoped>

</style>
