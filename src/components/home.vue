<template>
  <div id="home">
    <div id="bar">
        <ul>
            <li>
                <i class="logo">
                    <img src="@/assets/logo.png" alt="" />
                </i>
            </li>
            <li><a class="bar-title" @click="fuck">个人主页</a></li>
            <li><a class="bar-title" @click="date" href="#">日志</a></li>
            <li><a class="bar-title" id="self" href="#">自我介绍</a></li>
            <li><a class="bar-title" id="help" href="#">帮助</a></li>
<!--            <li><a class="bar-title" id="creation" @click="creationClick">Creation</a></li>-->
            <li>
              <Poptip id="creation"
                      placement="bottom-end"
                      width="200">
                <a class="bar-title">Creation</a>
                <div class="api" slot="content">
                  <Input v-model="key" size="small" type="textarea" placeholder="Input the private key"/><br>
                  <a @click="enterClick" style="font-size: 20px">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter
                  </a>
                </div>
              </Poptip>
            </li>
        </ul>
    </div>
    <div id="content">
      <Row>
        <Col span="4">
          <Card class="left-card">
            <p slot="title">left card</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
        </Col>
        <Col span="16">
          <div id="demo"></div>
        </Col>
        <Col span="4">
          <Card class="right-card">
            <p slot="title">right card</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
        </Col>
      </Row>

    </div>
    <div id="footer">

    </div>
  </div>
</template>
<script>
  import Vue from "vue";

  export default {
    data(){
      return{
        tables: '<Card  style="text-align: center;margin: 20px;"><p slot="title">个人博客搭建历程</p>\n' +
          '<a>Content of no border type. Content of no border type. Content of no border type.' +
          ' Content of no border type. </a>' +
          '<img style="margin: auto;width: 150px;" src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"/>' +
          '<a href="https://www.baidu.com">百度一下，你就知道</a>' +
          '</Card>'
      }
    },
    methods:{
      fuck(){
        alert(this.content)
        this.showContent=this.content;
      },
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
      },
      enterClick(){
        if(this.key === ' '){
          this.$router.push({path: '/creation'});
        }
        else
          alert('error go away')
      }
    },
    mounted() {
      this.date();
    }
  }

</script>
<style scoped>
  @media screen and (max-width: 430px) {
    #home #bar ul li .bar-title{
      font-size: 15px;
    }

    #home #bar .logo img{
      display: none;
    }

    #home #content .left-card{
      display: none;
    }

    #home #content .right-card{
      display: none;
    }

    #home #content #demo{
      width: 400px;
      /*margin-left: 0px;*/
    }
  }
  div {
    position: relative;
  }
  #home #bar {
    z-index: 1;
  }
  #home #bar ul{
    box-shadow: 0 1px 5px #b4b4b4;
    list-style-type: none;
    width: 100%;
    position: fixed;
    font-size: 16px;
    background: white;

  }

  #home #bar ul:hover{
    transition: all 0.2s linear;
    box-shadow: 0 2px 5px #b4b4b4;
  }

  #home #bar ul li{
    float: left;
  }
  #home #bar ul li .bar-title{
    color: deepskyblue;
    font-family: "Microsoft YaHei UI",serif;
    display: block;
    padding-top: 7px;
    margin: 10px;
  }
  #home #bar ul li .bar-title:hover{
    text-shadow: 1px 1px 8px #20a0ed;
    transform: rotate(0deg);
    transition: all 0.1s linear;
    color: dodgerblue;
    font-size: 18px;
  }
  #home #bar ul li #creation{
    position: absolute;
    right: 20px;
  }

  #home #bar .logo:hover{

  }
  #home #bar .logo img{

    padding-top: 3px;
    padding-left: 3px;
    width: 70%;
  }

  #home #footer{
    display: block;
    font-size: 30px;
    position: relative;
    z-index: 1;
    padding-bottom: 0;
  }

  #home #content{
    padding-top: 80px;
  }

  #home #content .left-card{
    margin-left: 10px;
    margin-top: 50px;
  }

  #home #content .right-card{
    margin-right: 10px;
    margin-top: 50px;
  }


</style>
