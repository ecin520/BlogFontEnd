<template>
  <div id="article">
    <div id="demo"></div>
    <Card style="margin: 20px;">
      <p slot="title">个人博客搭建历程-置顶</p>
      <a>本个人博客项目启动时间为2019年9月14日，基本完工于2019年9月20日，前端使用vue.js框架，后端使用ssm(Spring+Spring MVC+MyBatis)整合框架......</a><br>
      <img style="margin: auto;width: 150px;" src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"/>
    </Card>
    <Card style="margin: 20px;">
      <a href="https://www.baidu.com" target="_blank"><h2>Python利用线程池爬取资源</h2></a>
      <a href="https://www.baidu.com">当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......</a><br>
      <img src="https://www.python.org/static/img/python-logo.png"/>
    </Card>
    <Card style="margin: 20px;">
      <p slot="title">个人博客搭建历程-置顶</p>
      <a>本个人博客项目启动时间为2019年9月14日，基本完工于2019年9月20日，前端使用vue.js框架，后端使用ssm(Spring+Spring MVC+MyBatis)整合框架......</a><br>
      <img style="margin: auto;width: 150px;" src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"/>
    </Card>
    <Card style="margin: 20px;">
      <a href="https://www.baidu.com" target="_blank"><h2>Python利用线程池爬取资源</h2></a>
      <a href="https://www.baidu.com">当我们熟练requests模块时，爬取到资源确实振奋人心，但是我们发现爬取的速度确实令人堪忧，因为这是单线程爬虫......</a><br>
      <img src="https://www.python.org/static/img/python-logo.png"/>
    </Card>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    data(){
      return{
        tables: ''
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
