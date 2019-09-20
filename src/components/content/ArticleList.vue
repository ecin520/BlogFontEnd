<template>
    <div id="Article">
      <div class="article-list-content" v-for="item in article">
        <Card style="border-radius:13px;">
          <a slot="title"><h2>{{item.title}}</h2></a>
          <a @click="entryArticle(item)">{{item.generalize}}</a><br><br>
          <a style="color: #cc7edc;"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a style="color: #cc7edc;"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a style="color: #cc7edc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}} &nbsp;&nbsp;</a><br><br>
          <img style="margin-right: 0px;width: 150px;" :src="item.show_image"/>
          <Divider/>
        </Card>
      </div>

    </div>
</template>

<script>
  import https from '@/https.js'
  export default {
    data(){
      return{
        article: [
          {
            id: '',
            title: '等待连接后端',
            generalize: '请耐心等待后台发送数据',
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
    methods:{
      entryArticle(item){
        this.$router.push({name: 'ArticleCard',params: {id: item.id}});
        document.getElementById("bar").scrollIntoView();
      }
    },
    created() {
      this.$axios({
        url: '/api/article/getAllArticle',
        method: 'get'
      }).then(response=>{
        this.article = response.data
      }).catch(error=>{
        alert(error);
      });
      // https.doGet('/api/article/getAllArticle').then((data)=>{
      //   this.article = data.data
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  }
</script>

<style scoped>
#Article .article-list-content{
  margin: 21px;
}
</style>
