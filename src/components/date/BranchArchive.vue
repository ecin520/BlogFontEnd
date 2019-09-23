<template>
  <div id="BranchArchive" class="animated bounce fadeInDown">
    <Timeline>
      <TimelineItem color="green">
        <h1><a style="color: #52c41a;margin-top: -20px;">{{this.$route.params.id}}</a></h1>
      </TimelineItem>
      <TimelineItem v-for="item in article" :key="item.index">
        <Card style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
          <a @click="articleClick(item)" slot="title"><h2>{{item.title}}</h2></a>
          <a @click="articleClick(item)" style="color: #b89d91"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a @click="typeClick(item.type_name)" style="color: #b89d91"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a @click="branchClick(item.branch_name)" style="color: #b89d91"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
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
    created() {

      this.$Loading.start();
      this.$axios({
        url: this.$store.state.host+'/article/getArticleByBranchName',
        method: 'get',
        params: {
          branch_name: this.$route.params.id
        }
      }).then(response=>{
        this.article = response.data;
        if(this.article.length === 0){
          this.article = [
            {
              id: '',
              title: '此分支暂无文章发表',
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
      }).catch(error=>{
        console.log(error);
        this.$Loading.error();
      });
      this.$Loading.finish();

    },
    methods:{
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
    }
  }
</script>

<style scoped>
  #BranchArchive{
    margin: 21px;
  }
</style>
