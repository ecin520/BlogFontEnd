<template>
  <Card class="tips">
    <div v-highlight class="markdown-body" v-html="tips_html"></div>
  </Card>
</template>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';

  export default {
    data(){
      return{
        tips_html: ''
      }
    },
    created() {
      this.$axios({
        url: '/api/getTips',
        method: 'get',
      }).then(response=>{
        marked.setOptions({
          renderer: this.tips_html,
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        });
        this.tips_html = marked(response.data.content,{sanitize: true});
      }).catch(error=>{
        this.$Message.error(error)
      })
    }
  }
</script>

<style scoped>
  .tips{
    text-align: center;
    margin: 21px;
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }
</style>
