<template>
    <div id="Article">
      <div class="animated bounce fadeIn" style="margin: 21px;" v-for="(item,index) in article">
        <Card class="article-list" style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;" :dis-hover="true">
          <a @click="entryArticle(item)" slot="title"><a style="color: deepskyblue;font-size: 2em;font-family: 'JetBrains';">{{item.title}}</a></a>
          <img v-if="item.show_image !== null" style="width: 100%;max-width: 270px;margin-bottom: 14px;" :src="item.show_image" alt="" /><br>
          <a v-if="item.generalize !== null" style="font-size: 1.1em;font-family: 'JetBrains';color: #00a5ed;" @click="entryArticle(item)">{{item.generalize}}</a>
          <Divider/>
          <a @click="entryArticle(item)" style="font-family: 'JetBrains';color: #b89d91">{{item.time}}&nbsp;</a>
          <a @click="typeClick(item.type_name)" style="font-family: 'JetBrains';color: #b89d91"><Icon size="23" type="md-copy" />{{item.type_name}}&nbsp;</a>
          <a @click="branchClick(item.branch_name)" style="font-family: 'JetBrains';color: #b89d91"><Icon size="23" type="ios-git-branch" />{{item.branch_name}}</a>
        </Card>

      </div>
      <div class="pageination">
        <Page :total="itemNum"
              :page-size="pageSize"
              simple
              @on-change="changePage"
              ></Page>
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
        ],
        tempData: [
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
        ],
        itemNum: 0,
        pageSize: 10
      }
    },
    methods:{
      entryArticle(item){
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
      },
      changePage(index){
        let start = (index-1) * this.pageSize;
        let end = index * this.pageSize;
        this.article =  this.tempData.slice(start,end);
        document.getElementById("bar").scrollIntoView();
      }
    },
    created() {
      this.$Loading.start();
      this.$axios({
        url: this.$store.state.host+'/article/getArticleOrderByDate',
        method: 'get',
        dataType: 'jsonp',
        crossDomain: true
      }).then(response=>{
        this.tempData = response.data;
        this.itemNum = this.tempData.length;
        if(this.itemNum < this.pageSize){
          this.article = this.tempData;
        }
        else{
          this.article=this.tempData.slice(0,this.pageSize);
        }
      }).catch(error=>{
        console.log(error);
        this.$Loading.error();
      });
      this.$Loading.finish();
      // https.doGet('/api/article/getAllArticle').then((data)=>{
      //   this.article = data.data
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  }
</script>

<style scoped>

  @media screen and (max-width: 800px) {
    .article-list {
      border-radius: 0 !important;
      box-shadow: 1px 1px 6px #adadad;
      margin: 10px;
    }
  }

  #Article {
    margin-left: -21px;
    margin-right: -21px;
  }
  #Article .pageination{
    text-align: center;
  }
</style>
