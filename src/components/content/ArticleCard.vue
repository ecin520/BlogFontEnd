<template>
  <div id="ArticleCard">
    <Card>
<!--      <h1>{{id}}</h1>-->
      <div v-highlight class="markdown-body" v-html="article_html"></div>
    </Card>
  </div>
</template>>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';
  export default {
    data(){
      return{
        id: this.$route.params.id,
        article_html: ''
      }
    },
    methods: {

    },
    mounted() {
      let md = '# Java\n' +
        '\n' +
        ' \n' +
        '\n' +
        '```\n' +
        'public class Main{\n' +
        '    public static void main(String[] args){\n' +
        '        System.out.println("Hello world");\n' +
        '    }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        ' \n' +
        '\n' +
        '| Monday | Tuesday | Wednesday |\n' +
        '| ------ | ------- | --------- |\n' +
        '| 吃饭   | 睡觉    | 喝水      |\n' +
        '\n' +
        ' \n' +
        '\n' +
        '![Python](https://www.python.org/static/img/python-logo.png)';
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
      this.article_html = marked(md,{sanitize: true});
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
