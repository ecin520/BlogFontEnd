<template>
    <div id="Archive" class="animated bounce fadeIn">
      <Timeline>
        <TimelineItem color="green">
          <h1><a style="color: #52c41a;">Archive</a></h1>
        </TimelineItem>
        <TimelineItem v-for="item in article" :key="item.index">
          <Card  style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
            <a style="color: deepskyblue;font-size: 2em;font-family: 'JetBrains';" @click="articleClick(item)" slot="title">{{item.title}}</a>
            <a @click="articleClick(item)" style="font-family: 'JetBrains';color: #27c3dc;">{{item.time}} </a>
            <a @click="typeClick(item.type_name)" style="font-family: 'JetBrains';color: #27c3dc;"><Icon size="23" type="md-copy" />{{item.type_name}} </a>
            <a @click="branchClick(item.branch_name)" style="font-family: 'JetBrains';color: #27c3dc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
          </Card>
        </TimelineItem>
<!--        <TimelineItem color="green">-->
<!--          <h1><a style="color: #52c41a;margin-top: -20px;">2018</a></h1>-->
<!--        </TimelineItem>-->
<!--        <TimelineItem color="green">-->
<!--          <h1><a style="color: #52c41a;margin-top: -20px;">2017</a></h1>-->
<!--        </TimelineItem>-->
      </Timeline>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        article: [

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
        url: this.$store.state.host+'/article/getAllArticle',
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
