<template>
    <div id="Article">
      <div class="article-list-content" v-for="item in article">
        <Card>
          <a slot="title"><h2>{{item.title}}</h2></a>
          <a @click="entryArticle(item)">{{item.generalize}}</a><br><br>
          <a style="color: #cc7edc;"><Icon size="23" type="md-calendar" />{{item.time}} &nbsp;&nbsp;</a>
          <a style="color: #cc7edc;"><Icon size="23" type="md-copy" />{{item.type_name}} &nbsp;&nbsp;</a>
          <a style="color: #cc7edc;"><Icon size="23" type="ios-git-branch" />{{item.branch_name}} &nbsp;&nbsp;</a><br><br>
          <img style="margin-right: 0px;width: 150px;" :src="item.image"/>
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
            id: '201909171601',
            title: '个人博客搭建历程-置顶',
            generalize: '本个人博客项目启动时间为2019年9月14日，基本完工于2019年9月20日，前端使用vue.js框架，后端使用ssm(Spring+Spring MVC+MyBatis)整合框架......',
            time: '2019/9/17',
            type_name: 'Java',
            branch_name: 'Spring',
            image: 'https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png',
            article_url: ''
          },
          // {
          //   id: '201909171602',
          //   title: 'Python利用线程池爬取资源',
          //   generalize: '当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......',
          //   time: '2019/9/17',
          //   type: 'Python',
          //   branch: '爬虫',
          //   image: 'https://www.python.org/static/img/python-logo.png',
          //   article_link: '',
          //   type_link: '',
          //   branch_link: ''
          // },
          // {
          //   id: '201909171603',
          //   title: 'Python利用线程池爬取资源',
          //   generalize: '当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......',
          //   time: '2019/9/17',
          //   type: 'Python',
          //   branch: '爬虫',
          //   image: 'https://www.python.org/static/img/python-logo.png',
          //   article_link: '',
          //   type_link: '',
          //   branch_link: ''
          // },
          // {
          //   id: '201909171604',
          //   title: 'Python利用线程池爬取资源',
          //   generalize: '当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......',
          //   time: '2019/9/17',
          //   type: 'Python',
          //   branch: '爬虫',
          //   image: 'https://www.python.org/static/img/python-logo.png',
          //   article_link: '',
          //   type_link: '',
          //   branch_link: ''
          // },
          // {
          //   id: '201909171605',
          //   title: 'Python利用线程池爬取资源',
          //   generalize: '当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......',
          //   time: '2019/9/17',
          //   type: 'Python',
          //   branch: '爬虫',
          //   image: 'https://www.python.org/static/img/python-logo.png',
          //   article_link: '',
          //   type_link: '',
          //   branch_link: ''
          // }
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
      https.doGet('/api/article/getAllArticle').then((data)=>{
        this.article = data.data
      }).catch(err=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped>
#Article .article-list-content{
  margin: 21px;
}
</style>
