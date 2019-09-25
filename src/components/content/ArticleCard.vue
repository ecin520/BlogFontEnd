<template>
  <div id="ArticleCard">
    <Card class="animated bounce fadeIn" style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
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
  #ArticleCard{
    margin: 21px;
  }
  .markdown-body pre{

  }
</style>
