<template>
  <div id="ArticleCard">
    <Card>
      <div v-highlight class="markdown-body" v-html="article_html"></div>
    </Card>
  </div>
</template>>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';

  import https from '@/https.js'

  export default {
    data(){
      return{
        id: this.$route.params.id,
        article_html: '',
        md: ''
      }
    },
    methods: {

    },
    mounted() {
      // let params = {'id': this.$route.params.id};
      let params = new FormData();
      params.append('id',this.$route.params.id);
      // https.doGet('/api/article/getArticleById',params).then((data)=>{
      //   marked.setOptions({
      //     renderer: this.article_html,
      //     gfm: true,
      //     tables: true,
      //     breaks: false,
      //     pedantic: false,
      //     sanitize: false,
      //     smartLists: true,
      //     smartypants: false
      //   });
      //   this.article_html = marked(data.data.content,{sanitize: true});
      // }).catch(err=>{
      //   console.log(err)
      // });
      this.$axios({
        url: '/api/article/getArticleById',
        method: 'post',
        params: {
          id: this.$route.params.id
        }
      }).then(response=>{
          marked.setOptions({
            renderer: this.article_html,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          });
          this.article_html = marked(response.data.content,{sanitize: true});
      }).catch(error=>{
        alert(error)
      })
    }
  }
</script>

<style scoped>
  #ArticleCard{
    margin: 21px;
  }
  #ArticleCard .markdown-body{

  }
</style>
