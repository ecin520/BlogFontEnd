<template>
  <div id="Archive" class="animated bounce fadeIn">
    <Timeline>
      <TimelineItem color="green">
        <h1><a style="font-family: 'JetBrains';color: #52c41a;margin-top: -20px;">2019\2020</a></h1>
      </TimelineItem>
      <TimelineItem v-for="item in article" :key="item.index">
        <Card style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
          <a style="font-family: 'JetBrains';font-size: 2em" @click="articleClick(item)" slot="title">{{item.id}}:{{item.title}}</a>
          <a @click="articleClick(item)" style="font-family: 'JetBrains';color: #27c3dc;">{{item.time}} </a>
          <a @click="typeClick(item.type_name)" style="font-family: 'JetBrains';color: #27c3dc;"><Icon size="23" type="md-copy" />{{item.type_name}} </a>
          <a @click="branchClick(item.branch_name)" style="font-family: 'JetBrains';color: #27c3dc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
        </Card>
      </TimelineItem>
    </Timeline>

    <Modal
      v-model="Visible"
      :closable="false"
      :loading="loading"
      :styles="{width: '280px',top: '190px'}"
      footer-hide>
      <h1 style="text-align: center">请选择您的操作</h1><br>
      <h2 style="color: #52c41a">{{the_title}}</h2><br>
        <Button @click="modifyArticle" style="float: right" type="default">修改</Button>
        <span style="float: right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button @click="deleteArticle" style="float: right" type="error">删除</Button>
        <br><br>

    </Modal>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        article: [
        ],
        Visible: false,
        article_id: '',
        the_title: ''
      }
    },
    // inject: ['reload'],
    methods: {
      articleClick(item){
        this.article_id = item.id;
        this.the_title = item.title;
        this.Visible = true;
      },
      deleteArticle(){
        // let that = this;
        this.$axios({
          url: this.$store.state.host+'/article/deleteArticle',
          params: {
            id: this.article_id
          },
          method: 'get'
        }).then(response=>{
          this.$Message.info('success');
          this.Visible = false;
          // this.$router.push({path: '/DeleteArticle'});
          this.$router.go(0);
          // that.reload()
        }).catch(error=>{
          this.$Message.error(error)
        });
      },
      modifyArticle(){
        this.$router.push({name: 'EditArticle',params: {id: this.article_id}});
      }
    },
    created() {
      this.$Loading.start();
      this.$axios({
        url: this.$store.state.host+'/article/getArticleOrderByDate',
        method: 'get'
      }).then(response=>{
        this.article = response.data;
      }).catch(error=>{
        console.log(error);
        this.$Loading.error();
      });
      this.$Loading.finish();
    }
  }
</script>

<style scoped>
  #Archive{
    margin: 21px;
  }
</style>
