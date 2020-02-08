<template>
  <Card id="tips" class="animated bounce fadeIn tip-card">
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
      // this.$axios({
      //   url: '/api/getTips',
      //   method: 'get',
      // }).then(response=>{
      //   marked.setOptions({
      //     renderer: this.tips_html,
      //     gfm: true,
      //     tables: true,
      //     breaks: false,
      //     pedantic: false,
      //     sanitize: false,
      //     smartLists: true,
      //     smartypants: false
      //   });
      //   this.tips_html = marked(response.data.content,{sanitize: true});
      // }).catch(error=>{
      //   this.$Message.error(error)
      // })
      let md = '## Ecin520\'s Blog 使用教程\n' +
          '！！ 本博客系统文章操作只对站长开放\n' +
          '\n' +
          '博客网站拥有的基本上都拥有了，写文章，添加分类、分支，修改删除博客为一体的网站，普通用户只有观看博客的权限，点击右上角小飞机将会带你走进新世界，核心功能都在小飞机那里。少年，暴力破解密钥吧。\n\n' +
          '![image.png](http://106.15.200.82/source/1580441639206.jpg)';

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
        this.tips_html = marked(md,{sanitize: true});

    }
  }
</script>

<style scoped>
  #tips{
    text-align: center;
    /*margin: 21px;*/
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }

  @media screen and (max-width: 800px) {
    .tip-card{
      border-radius: 0 !important;
      box-shadow: 1px 1px 6px #adadad;
      margin: 10px;
    }

    /*.markdown-body >>> code {*/
    /*  font-family: "Fira Code Light";*/
    /*  font-size: 13px;*/
    /*}*/

  }
</style>
