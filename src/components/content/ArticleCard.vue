<template>
  <div id="ArticleCard">
    <Card class="animated bounce fadeIn article-card" >
      <div style="font-family: 'JetBrains'" v-highlight class="markdown-body" v-html="article_html"></div>
    </Card>
  </div>
</template>>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';
  // import '@/assets/retro.css'

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
    created(){
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
      this.article_html = '# 请耐心等待数据加载\n' +
        '\n' +
        '\n' +
        '\n'
    },
    mounted() {


      let params = new FormData();
      params.append('id',this.$route.params.id);
      this.$axios({
        url: this.$store.state.host+'/article/getArticleById',
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
        this.$Message.error(error)
      })
    }
  }
</script>

<style scoped>

  @media screen and (max-width: 800px) {
    .article-card{
      border-radius: 0 !important;
      box-shadow: 1px 1px 6px #adadad;
      margin-top: 5px;
    }

    /*.markdown-body >>> code {*/
    /*  font-family: "Fira Code Light";*/
    /*  font-size: 13px;*/
    /*}*/

  }

  #ArticleCard .article-card {
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }

  #ArticleCard {

  }


  .markdown-body >>> pre {
    border-style: solid;
    border-width: 1px;
    border-color: #d1d1d1;
    background: #ffffff;
  }

  .markdown-body >>> code {
    font-family: JetBrains;
    font-size: 12px;
  }


  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 1px;
  }


</style>
