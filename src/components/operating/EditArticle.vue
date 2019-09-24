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
          <Col span="6">
            <Button @click="selectTypeName">请选择标签</Button>
          </Col>
          <Col span="6">
            <Button @click="selectBranchName">请选择文章类型</Button>
          </Col>
        </Row><br>
        <Row>
          <Button style="float: right" @click="submitForm">提交</Button>
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
            'show_image': ''
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
        var formdata = new FormData();
        formdata.append('file',$file);
        this.$axios({
          url: this.$store.state.host+'/fileUpload/imageUpload',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response=>{
          this.$Message.info(response.data);
          $mv.$img2Url(pos,url);
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
            show_image: this.article.show_image
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
      }).catch(error=>{
        this.$Message.error(error);
      })
    }
  }
</script>

<style scoped>

</style>
