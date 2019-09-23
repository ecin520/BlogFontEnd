<template>
    <div id="Article">
      <div class="animated bounce fadeInDown" style="margin: 21px;" v-for="(item,index) in article">
        <Card style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;" :dis-hover="true">
          <a @click="entryArticle(item)" slot="title"><h2>{{item.title}}</h2></a>
          <a @click="entryArticle(item)">{{item.generalize}}</a><br><br>
          <img style="margin-right: 0;width: 150px;" :src="item.show_image" alt="" />
          <Divider/>
          <a @click="entryArticle(item)" style="color: #b89d91"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a @click="typeClick(item.type_name)" style="color: #b89d91"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a @click="branchClick(item.branch_name)" style="color: #b89d91"><Icon size="23" type="ios-git-branch" />{{item.branch_name}} &nbsp;&nbsp;</a>
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
        pageSize: 6
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
        url: this.$store.state.host+'/article/getAllArticle',
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
  #Article .article-list-content{
    margin: 21px;
  }
  #Article .pageination{
    text-align: center;
  }
</style>
