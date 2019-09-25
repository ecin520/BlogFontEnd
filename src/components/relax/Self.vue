<template>
  <Card id="self" class="animated bounce fadeIn">
    <div v-highlight class="markdown-body" v-html="self_html"></div>
  </Card>
</template>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';
  export default {
    data(){
      return{
        self_html: ''
      }
    },
    created() {
    //   this.$axios({
    //     url: '/api/getSelfIntroudction',
    //     method: 'get',
    //   }).then(response=>{
    //     marked.setOptions({
    //       renderer: this.self_html,
    //       gfm: true,
    //       tables: true,
    //       breaks: false,
    //       pedantic: false,
    //       sanitize: false,
    //       smartLists: true,
    //       smartypants: false
    //     });
    //     this.self_html = marked(response.data.content,{sanitize: true});
    //   }).catch(error=>{
    //     this.$Message.error(error)
    //   })
      let info = '# Self Introduction\n' +
        '\n' +
        '### Edited by Ecin520\n' +
        '\n' +
        '**My name is Guo Wei, I like to play basketball, I like to listen to electronic music, I like to play guitar, I like to cook myself, but I have a unique love for programming. I like to play computer since I was young, but I have always been tossing myself. I have no enlightenment, but I have always been familiar with computers. Since my computer has not been connected to the Internet, I have not learned anything during the previous period. It wasn\'t until I went to college that I started to really touch programming. I like to learn a lot of things myself and toss up some messy things. A year ago, when I was still learning algorithms, I first touched the language of java because of one. The BigInteger class, which uses a few lines of code to write in hundreds of lines of code in C language. Because of this competition, I took the first place in the whole hospital, so I started to have an interest in java. From that time on, I taught myself myself. I started to learn the most basic grammar types, etc., and later I did a final assignment for self-study swing and awt in order to finish the final assignment, and got the highest score. This has strengthened my pace of learning java. Later, I started to learn java springboot framework, and used springboot springmvc mybatis to do a final job, and once again got the highest score of the whole class. Since then, I have developed a strong interest in website development, self-study jsp servlet spring spring mvc mybatis redis Mysql Linux deployment operation and maintenance, etc., on the road to learning java, I will always work hard and improve myself. Come on!**\n' +
        '\n' +
        '![](https://img-blog.csdnimg.cn/20190922175000168.png)';

          marked.setOptions({
            renderer: this.self_html,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          });
          this.self_html = marked(info,{sanitize: true});

    }
  }
</script>

<style scoped>
  #self{
    text-align: center;
    margin: 21px;
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }
</style>
