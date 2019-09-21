<template>
  <div id="Archive">
    <Timeline>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2019</a></h1>
      </TimelineItem>
      <TimelineItem v-for="item in article" :key="item.index">
        <Card style="border-radius:13px;">
          <a @click="articleClick(item)" slot="title"><h2>{{item.title}}</h2></a>
          <a @click="articleClick(item)" style="color: #cc7edc;"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a @click="typeClick(item.type_name)" style="color: #cc7edc;"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a @click="branchClick(item.branch_name)" style="color: #cc7edc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
        </Card>
      </TimelineItem>
    </Timeline>
    <Timeline>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">2018</a></h1>
      </TimelineItem>
      <TimelineItem v-for="item in article" :key="item.index">
        <Card style="border-radius:13px;">
        </Card>
      </TimelineItem>
    </Timeline>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        article: [
          {
            id: '',
            title: '',
            generalize: '',
            content: '',
            time: '',
            type_name: '',
            branch_name: '',
            show_image: '',
            article_url: ''
          }
        ]
      }
    },
    methods: {
      articleClick(item){
        this.$router.push({name: 'ArticleCard',params: {id: item.id}});
        document.getElementById("bar").scrollIntoView();
      },
      typeClick(type_name){
        this.$router.push({name: 'TypeArchive',params: {id: type_name}});
        document.getElementById("bar").scrollIntoView();
      },
      branchClick(branch_name){
        this.$router.push({name: 'BranchArchive',params: {id: branch_name}});
        document.getElementById("bar").scrollIntoView();
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
