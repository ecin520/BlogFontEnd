<template>
  <div class="self">
    <Card id="self" class="animated bounce fadeIn self-card">
      <div style="font-family: 'JetBrains'" v-highlight class="markdown-body" v-html="self_html"></div>
    </Card>
  </div>
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
      let info = '#### Edited by Ecin520\n' +
          '\n' +
          '*My name is Guo Wei, I like to play basketball, I like to listen to electronic music, I like to play guitar, I like to cook myself, but I have a unique love for programming. I like to play computer since I was young, but I have always been tossing myself. I have no enlightenment, but I have always been familiar with computers. Since my computer has not been connected to the Internet, I have not learned anything during the previous period. It wasn\'t until I went to college that I started to really touch programming. I like to learn a lot of things myself and toss up some messy things. A year ago, when I was still learning algorithms, I first touched the language of java because of one. The BigInteger class, which uses a few lines of code to write in hundreds of lines of code in C language. Because of this competition, I took the first place in the whole hospital, so I started to have an interest in java. From that time on, I taught myself myself. I started to learn the most basic grammar types, etc., and later I did a final assignment for self-study swing and awt in order to finish the final assignment, and got the highest score. This has strengthened my pace of learning java. Later, I started to learn java springboot framework, and used springboot springmvc mybatis to do a final job, and once again got the highest score of the whole class. Since then, I have developed a strong interest in website development, self-study jsp servlet spring spring mvc mybatis redis Mysql Linux deployment operation and maintenance, etc., on the road to learning java, I will always work hard and improve myself. Come on!*\n' +
          '\n' +
          '此站于2019/09/20竣工，但是由于服务器的缺憾，并未经常使用，而是转用GitHub利用Hexo搭建的博客，一来自己没有购置域名，二来访问速度比1mbps的服务器快，在此附上旧博客地址：[Ecin\'s Blog](https://ecin520.github.io/archives)，若有其他静态项目发布，此博客随时有访问不了的可能。说实话，Hexo博客虽然模板众多，但是自己使用就好像是跟风随大流，没有自己的个性，而且博客编辑方面，只能通过本地Hexo命令生成Html静态页面，然后上传至Github，也就是必须要有一台有git环境的电脑，像对于我这种使用几台计算机的工作者，每台电脑要写博客必须装好git配好环境，实在是不便。但是自己的服务器写博客就方便多了，在markdown文本编辑器的支持下，在highlight.js高亮的支持下，在github-markdown-css样式的支持下，最重要的是在阿里云提供了两年两百多块5mbps学生服务器的支持下，我更新了此站，最重要的是设备适配后更加好看了，字体也使用了JetBrainsMono，颜色更加鲜艳，新增了文章推荐功能。回到正题，为什么自己建站写博客比github搭建博客好多了呢，首先上面说的不用每台计算机都要安装环境，只要打开网址，输入自己的密钥，就可以进行博客的编辑，新增文章，新增分支，新增类型，新增推荐文章，修改文章，删除文章等等。比使用别的平台搭建博客实在是方便许多，并且拥有自己的个性，只要有一台联网的电脑，编写自己博客就成为可能。但代价是操作难度大于利用其他平台搭建，服务器成本，域名成本，维护服务器成本，还要应对许多bug，前后台都要自己编写（本站所有代码均是自己手工编写）。\n' +
          '网站建立之初借鉴了[https://www.codesheep.cn/](https://www.codesheep.cn/)这个网站的外形，Bar借鉴了Github的黑色Bar，但是其他部分完全自己凭空构造。\n' +
          '\n' +
          '本人就读于一所普通的本科院校，读书期间，喜欢折腾与挑战自己（熬夜），特别喜欢coding，会使用很多编程语言，喜欢用编程语言去解决问题，而不是比较他们的高低，每种语言都有自己独特的优势与生态，大一学习 C ，后来学了点 C++ ，主要是用来写算法题，大二应专业要求，学习了C#，但听人说Java是世界上最好的编程语言，于是我开始自学Java，懵懂无知的我一入Java深似海，从JavaSE到JavaEE，编写AWT Swing JFX到后面的Jsp Servlet Spring SpringBoot SpringCloud，一边学习一边感受着coding带来的乐趣，有了后端知识远远不够，配合前端才有趣，于是学习了Vue.js写前台（本博客网站前台），后来发现Vue.js初始加载太慢，适合用来做WebApp，于是为了做WebApp，学习了WebApp的知识和H5+，做了一个对我来说比较大的项目，最后发现WebApp的速度实在是感人，调用原生API也要用其他的库，正好有一次机会了解到了Flutter，跨平台，速度快，近原生，开始了学习Flutter的路程，开发Flutter需要使用Dart语言，于是顺便学了下Dart。除此之外，Python语言我也是非常热爱，超级简洁的语法，强大的py库，比较热衷利用Python来编写爬虫和数据分析，总之，个人感兴趣的东西都会去学，拥有兴趣学的才会更好更快。\n' +
          '\n' +
          '最后：一入编程深似海，学到死也学不完，学海无涯，热爱就去学吧！';

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
  @media screen and (max-width: 800px) {
    .self-card{
      border-radius: 0 !important;
      box-shadow: 1px 1px 6px #adadad;
      margin: 10px;
    }

    .self {
      position: relative;
    }

    /*.markdown-body >>> code {*/
    /*  font-family: "Fira Code Light";*/
    /*  font-size: 13px;*/
    /*}*/

  }


  #self{
    text-align: justify;
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }

  .markdown-body >>> pre {
    border-style: solid;
    border-width: 1px;
    border-color: #d1d1d1;
    background: #ffffff;
  }

  .markdown-body {
    font-size: 13px;
  }

</style>
