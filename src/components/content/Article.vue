<template>
  <div id="article">
    <div id="demo"></div>

  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    data(){
      return{
        tables: '    <span>\n' +
          '      <Card style="margin: 20px;">\n' +
          '        <p slot="title">个人博客搭建历程-置顶</p>\n' +
          '        <a>本个人博客项目启动时间为2019年9月14日，基本完工于2019年9月20日，前端使用vue.js框架，后端使用ssm(Spring+Spring MVC+MyBatis)整合框架......</a><br>\n' +
          '        <img style="margin: auto;width: 150px;" src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"/>\n' +
          '      </Card>\n' +
          '      <Card style="margin: 20px;">\n' +
          '        <a href="https://www.baidu.com" target="_blank"><h2>Python利用线程池爬取资源</h2></a>\n' +
          '        <a href="https://www.baidu.com">当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......</a><br>\n' +
          '        <img src="https://www.python.org/static/img/python-logo.png"/>\n' +
          '      </Card>\n' +
          '      <Card style="margin: 20px;">\n' +
          '        <p slot="title">个人博客搭建历程-置顶</p>\n' +
          '        <a>本个人博客项目启动时间为2019年9月14日，基本完工于2019年9月20日，前端使用vue.js框架，后端使用ssm(Spring+Spring MVC+MyBatis)整合框架......</a><br>\n' +
          '        <img style="margin: auto;width: 150px;" src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"/>\n' +
          '      </Card>\n' +
          '      <Card style="margin: 20px;">\n' +
          '        <a href="https://www.baidu.com" target="_blank"><h2>Python利用线程池爬取资源</h2></a>\n' +
          '        <a href="https://www.baidu.com">当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......</a><br>\n' +
          '        <img src="https://www.python.org/static/img/python-logo.png"/>\n' +
          '      </Card>\n' +
          '    </span>'
      }
    },
    methods: {
      date(){
        var MyComponent = Vue.extend({
          template: this.tables,
          data(){
            return{

            }
          }
        });
        var component = new MyComponent().$mount();
        var dom = document.querySelector("#demo");
        dom.appendChild(component.$el);
      }
    },
    mounted() {
      this.date();
    }
  }
</script>

<style scoped>

</style>
