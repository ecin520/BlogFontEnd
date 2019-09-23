<template>
  <div id="Archive">
    <Timeline>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2019</a></h1>
      </TimelineItem>
      <TimelineItem v-for="item in article" :key="item.index">
        <Card style="border-radius:13px;">
          <a @click="articleClick(item)" slot="title"><h2>{{item.id}}:{{item.title}}</h2></a>
          <a @click="articleClick(item)" style="color: #cc7edc;"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a @click="typeClick(item.type_name)" style="color: #cc7edc;"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a @click="branchClick(item.branch_name)" style="color: #cc7edc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
        </Card>
      </TimelineItem>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2018</a></h1>
      </TimelineItem>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2018</a></h1>
      </TimelineItem>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2017</a></h1>
      </TimelineItem>
    </Timeline>

    <Modal
      v-model="Visible"
      :closable="false"
      :loading="loading"
      :styles="{width: '280px',top: '190px'}"
      footer-hide>
      <h1 style="text-align: center">请选择您的操作</h1><br>
      <h2 style="text-align: center;color: #52c41a">{{the_title}}</h2><br>
        <Button @click="modifyArticle" style="float: left" type="default">修改</Button>
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
    methods: {
      articleClick(item){
        this.article_id = item.id;
        this.the_title = item.title;
        this.Visible = true;
      },
      deleteArticle(){
        this.$axios({
          url: '/api/article/deleteArticle',
          params: {
            id: this.article_id
          },
          method: 'get'
        }).then(response=>{
          this.$Message.info('success');
          this.Visible = false;
          this.$router.push({name: '/DeleteArticle'})
        }).catch(error=>{
          this.$Message.error(error)
        });
      }
    },
    created() {
      this.$Loading.start();
      this.$axios({
        url: '/api/article/getArticleOrderByDate',
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
