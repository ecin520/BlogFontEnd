<template>
  <div id="home">
    <Layout>
<!--      <Header style="background: white">-->
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
                      width="190">
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
<!--      </Header>-->
      <Layout id="side-content">
        <Sider id="left-side">
          <LeftSideCard></LeftSideCard>
        </Sider>
        <Content>
          <div id="content">
            <router-view/>
<!--            <div id="demo"></div>-->
          </div>
        </Content>
        <Sider id="right-side">
          <Announcement></Announcement>
          <br><br><br><br><br><br>
          <RightLabel></RightLabel>
        </Sider>
      </Layout>
      <Footer id="footer">
        <Divider>Footer</Divider>
        <Row>
          <Col span="8">
            <ul style="float: left;text-align: center;list-style-type: none;">
              <li>作者其他平台</li><br>
              <li><a href="https://github.com//ecin520"><Icon type="logo-github" /> github</a></li><br>
              <li><a href="https://blog.csdn.net/ecin520"><Icon type="ios-paper-plane-outline" />CSDN</a></li><br>
              <li><a><Icon type="ios-call" />Telphone</a></li><br>
              <li><a><Icon type="ios-mail-outline" />Gmail</a></li><br>
            </ul>
          </Col>
          <Col span="8">
            <ul style="float: left;text-align: center;list-style-type: none;">
              <li>推荐链接</li><br>
              <li><a href="https://cn.vuejs.org/">Vue中文官网</a></li><br>
              <li><a href="https://mvnrepository.com/">Maven</a></li><br>
              <li><a href="https://spring.io/">Spring</a></li><br>
              <li><a href="https://start.spring.io/">SpringBoot</a></li><br>
            </ul>
          </Col>
          <Col span="8">
            &nbsp;&nbsp;&nbsp;&nbsp;捐赠Alipay<br>
            <img width="100px" src="@/assets/alipay.png"/>
            <br>&nbsp;&nbsp;捐赠WeChat<br>
            <img width="100px" src="@/assets/wechat.png"/>
          </Col>
        </Row>
        <Row>
          <Divider/>
          <p style="text-align: center">@Edited by ENCode</p>
        </Row>
      </Footer>
    </Layout>
  </div>
</template>
<script>

  import LeftSideCard from '../components/sides/LeftSideCard'
  import Announcement from '../components/sides/Announcement'
  import RightLabel from '../components/sides/RightLabel'
  export default {
    components: {Announcement, LeftSideCard,RightLabel},
    data(){
      return{

      }
    },
    methods:{
      fuck(){
        alert(this.content)
        this.showContent=this.content;
      },
      date(){
        this.$router.push({name: 'article'})
        // var MyComponent = Vue.extend({
        //   template: this.tables,
        //   data(){
        //     return{
        //
        //     }
        //   }
        // });
        // var component = new MyComponent().$mount();
        // var dom = document.querySelector("#demo");
        // dom.appendChild(component.$el);
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
  @media screen and (max-width: 740px) {
    #home #bar ul li .bar-title{
      font-size: 16px;
    }

    #home #bar .logo img{
      /*display: none;*/
    }


    #home #content{
      margin: auto;
      width: 415px;
      /*margin-left: 0px;*/
    }

    #home #side-content #left-side{
      display: none;
    }

    #home #side-content #right-side{
      display: none;
    }

    #home #bar #help{
      display: none;
    }

    #home #bar .logo{
      display: none;
    }

    #home #bar ul li .bar-title{
      padding: 6px;
    }

  }
  /*------------------border----------------------*/
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
    left: 0;
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
    padding-top: 9px;
    margin: 6px;
  }
  #home #bar ul li .bar-title:hover{
    text-shadow: 1px 1px 8px #20a0ed;
    transform: rotate(0deg);
    transition: all 0.05s linear;
    color: dodgerblue;
    font-size: 16px;
  }
  #home #bar ul li #creation{
    position: absolute;
    right: 20px;
  }

  /*#home #bar .logo:hover{*/

  /*}*/
  #home #bar .logo img{

    padding-top: 3px;
    padding-left: 3px;
    width: 70%;
  }

  #home #side-content {
    margin-top: 90px;
  }

  #home #left-side{
    background: none;
  }

  #home #right-side{
    /*margin-right: 10px;*/
    background: none;
  }




</style>
