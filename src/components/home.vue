<template>
  <div id="home">
    <Layout>
      <!--      <Header style="background: white">-->
      <div id="bar">
        <ul>
          <li>
            <i class="logo"><Icon style="color: white" size="57" type="logo-github" /></i>
          </li>
          <li><a style="font-family: 'JetBrains';color: white;" class="bar-title" @click="fuck">首页</a></li>
          <li><a style="font-family: 'JetBrains';color: white;" class="bar-title" @click="date">归档</a></li>
          <li><a style="font-family: 'JetBrains';color: white;" class="bar-title" @click="self" id="self">关于我</a></li>
          <li><a style="font-family: 'JetBrains';color: white;" class="bar-title" @click="help" id="help">帮助</a></li>
          <li><Input class="bar-title" id="search" search placeholder="" disabled /></li>
          <li>
            <div id="creation" placement="bottom-end" width="190">
              <a class="bar-title" @click="enterClick"><Icon style="color: white;" size="40" type="ios-send-outline" /></a>
            </div>
          </li>
        </ul>
      </div>
      <!--      </Header>-->
      <Layout id="side-content">
        <Sider class="animated bounce fadeInDown" id="left-side">
          <LeftSideCard></LeftSideCard>
          <br><br>
        </Sider>
        <Content>
          <div id="content">
            <router-view :key="key"></router-view>
          </div>
        </Content>
        <Sider class="animated bounce fadeInDown" id="right-side">
          <Announcement></Announcement>
          <br><br>
          <RightLabel></RightLabel>
        </Sider>
      </Layout><br>
      <Footer id="footer">
        <Divider/>
                <Row>
        <Col span="7">
          <ul style="float: left;text-align: center;list-style-type: none;">
            <li style="font-family: 'JetBrains';">作者其他平台</li><br>
            <li><a style="font-family: 'JetBrains'" href="https://github.com//ecin520" target="_blank"><Icon size="24" type="logo-github" /> github</a></li><br>
            <li><a style="font-family: 'JetBrains';" href="https://blog.csdn.net/ecin520" target="_blank"><Icon size="24" type="ios-paper-plane-outline" />&nbsp;&nbsp;CSDN</a></li><br>
            <li><a style="font-family: 'JetBrains';" target="_blank"><Icon size="24" type="ios-call" />&nbsp;Phone</a></li><br>
            <li><a style="font-family: 'JetBrains';" target="_blank"><Icon size="24" type="ios-mail-outline" />&nbsp;Gmail</a></li><br>
          </ul>
        </Col>
        <Col span="11">
          <span class="recomand-title">推荐链接</span><br>
          <div class="recomand-link">
            <a class="link-branch" href="https://spring.io/" target="_blank">Spring</a>
            <a class="link-branch" href="https://cn.vuejs.org/" target="_blank">Vue中文网</a>
            <a class="link-branch" href="https://flutterchina.club/" target="_blank">Flutter中文网</a>
            <a class="link-branch" href="https://mvnrepository.com/" target="_blank">Maven</a>
            <a class="link-branch" href="http://docscn.studygolang.com/" target="_blank">Golang中文文档</a>
            <a class="link-branch" href="https://start.spring.io/" target="_blank">SpringBoot</a>
            <a class="link-branch" href="https://www.youtube.com/?hl=zh-CN" target="_blank">Youtube</a>
            <a class="link-branch" href="https://www.bilibili.com/" target="_blank">bilibili</a>
            <a class="link-branch" href="https://www.baidu.com/" target="_blank">BaiDu</a>
            <a class="link-branch" href="https://mijisou.com/" target="_blank">秘迹搜索</a>
            <a class="link-branch" href="https://btsow.pw/tags" target="_blank"></a>
            <a class="link-branch" href="https://tellme.pw/btsow" target="_blank">BtSow</a>
            <a class="link-branch" href="https://www.microsoft.com/zh-cn/software-download/windows10" target="_blank">Win10官网下载</a>
            <a class="link-branch" href="https://www.dytt8.net/" target="_blank">电影天堂</a>
            <a class="link-branch" href="https://www.runoob.com/" target="_blank">runoob</a>
            <a class="link-branch" href="https://forum.xda-developers.com/" target="_blank">xda</a>
            <a class="link-branch" href="https://morvanzhou.github.io" target="_blank">莫烦Python</a>
            <a class="link-branch" href="https://www.iviewui.com/" target="_blank">iView</a>
            <a class="link-branch" href="https://cloud.tencent.com/" target="_blank">腾讯云</a>
            <a class="link-branch" href="https://element.eleme.cn/#/zh-CN/guide/design" target="_blank">ElementUI</a>
            <a class="link-branch" href="https://github.com/" target="_blank">github</a>
            <a class="link-branch" href="http://www.hewebgl.com/article/articledir/1" target="_blank">WebGL</a>
            <a class="link-branch" href="https://www.plexvpn.pro" target="_blank">Plex</a>
            <a class="link-branch" href="https://unbug.github.io/codelf/" target="_blank">CodeLF</a>
            <a class="link-branch" href="https://www.kotlincn.net/docs/reference/basic-syntax.html" target="_blank">Kotlin中文文档</a>
            <a class="link-branch" href="http://www.turingapi.com/" target="_blank">图灵机器人</a>
          </div>
          <div class="blank-area">
            &nbsp;
          </div>
        </Col>
        <Col span="6">
          <div class="given">
            &nbsp;&nbsp;&nbsp;Alipay<br>
            <img width="100px" src="@/assets/alipay.png"/>
            <br>&nbsp;&nbsp;&nbsp;WeChat<br>
            <img width="100px" src="@/assets/wechat.png"/>
          </div>
        </Col>
        <!--          <Divider/>-->
        <!--          <p style="text-align: center">@Edited by ENCode</p>-->
                </Row>
        <Row>
          <Divider/>
          <p style="font-family: 'JetBrains';text-align: center">Copyright © 2019 All rights reserved.</p>
        </Row>
      </Footer>
    </Layout>

    <Modal
      v-model="ModalVisible"
      :closable="false"
      :loading="loading"
      :styles="{width: '280px',top: '190px'}"
      footer-hide>
      <h3 style="text-align: center"><Icon size="50" type="md-key" />At the Modal,input the private key to entry the editor.</h3><br>
      <Input type="password" v-model="KeyPassword" placeholder=""/><br><br>
      <div style="display: flex;justify-content: center;">
        <a @click="entryEditor" style="float: right"><Icon  size="40" type="md-checkmark" /></a>
      </div>
    </Modal>

    <!--    <a class="go-top" href="#top"><Icon size="50" type="ios-arrow-dropup-circle" /></a>-->
  </div>
</template>
<script>
    import LeftSideCard from '../components/sides/LeftSideCard'
    import Announcement from '../components/sides/Announcement'
    import RightLabel from '../components/sides/RightLabel'
    import ArticleList from '../components/content/ArticleList'

    export default {
    components: {Announcement, LeftSideCard,RightLabel,ArticleList},
    data(){
      return{
        ModalVisible: false,
        QQModalVisible: false,
        tempData: [
          1,2,3,4,5
        ]
      }
    },
    methods:{
      fuck(){
        this.$router.push({path: '/ArticleList'});
        document.getElementById("bar").scrollIntoView();
        // this.$router.go(0)
      },
      date(){
        this.$router.push({path: '/Archive'});
        document.getElementById("bar").scrollIntoView();
      },
      enterClick(){
        if(this.$cookies.get('isLogin') === 'hello world'){
          this.$router.push({path: '/creation'});
        }
        else{
          this.ModalVisible = true
        }
      },
      entryEditor(){
        if(this.KeyPassword === 'hello world'){
          this.$cookies.set('isLogin','hello world','10d')
          this.$router.push({path: '/creation'});
        }
        else
          this.$Message.error('go away')
      },
      help(){
        this.$router.push({name: 'Tips'});
        document.getElementById("bar").scrollIntoView();
      },
      self(){
        this.$router.push({name: 'Self'});
        document.getElementById("bar").scrollIntoView();
      }
    },
    mounted() {
      // this.date();
      // this.$router.push({path: '/ArticleList'});
    },
    created() {
      // this.date();
      // this.$router.push({path: '/ArticleList'});
    },
    computed: {
      key() {
        return this.$route.path + Math.random();
      }
    }
  }
</script>
<style scoped>
  /*@media screen and (max-width: 420px){*/
  /*  #home #content{*/
  /*    margin: auto;*/
  /*    width: 310px;*/
  /*    !*margin-left: 0px;*!*/
  /*  }*/
  /*}*/
  @media screen and (max-width: 1200px){
    #home #side-content #left-side{
      display: none;
    }
    #content {
      margin: 21px;
    }
  }
  @media screen and (max-width: 800px) {
    #home #bar ul li .bar-title{
      font-size: 16px;
    }
    #home #bar .logo img{
      /*display: none;*/
    }
    #home #content{
      margin: auto;
      /*width: 65px;*/
      width: 100%;
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
    #home #bar #search{
      display: none;
    }
    #home .go-top{
      display: none;
    }

    #home #content{

    }
  }

  @media screen and (max-width: 660px){
    .recomand-link{
      display: none;
    }
    .given{
      float: right;
    }
    .recomand-title{
      display: none;
    }



  }
  /*------------------border----------------------*/



  #content {
    margin: 21px;
  }

  div {
    position: relative;
  }
  #home #bar {
    z-index: 1;
  }
  #home #bar ul{
    box-shadow: 0 1px 5px #7a7a7a;
    list-style-type: none;
    width: 100%;
    position: fixed;
    font-size: 16px;
    background: #24292e;
    left: 0;
  }
  #home #bar #search{
    position: absolute;
    width: 20%;
    right: 200px;
    margin-top: 2px;
  }
  #home #bar ul:hover{
    transition: all 0.09s linear;
    box-shadow: 0 2px 5px #b4b4b4;
  }
  #home #bar ul li{
    float: left;
  }
  #home #bar ul li .bar-title{
    color: deepskyblue;
    font-family: "Microsoft YaHei UI Light",serif;
    display: block;
    padding-top: 12px;
    margin: 6px;
  }
  #home #bar ul li .bar-title:hover{
    text-shadow: 1px 1px 8px #20a0ed;
    transform: rotate(0deg);
    transition: all 0.01s linear;
    color: dodgerblue;
    font-size: 16px;
  }
  #home #bar ul li #creation{
    position: absolute;
    top: -7px;
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
    margin-top: 50px;
  }
  #home #left-side{
    background: none;
  }
  #home #right-side{
    /*margin-right: 10px;*/
    background: none;
  }
  #home .go-top{
    position: fixed;
    bottom: 10px;
    right: 70px;
    color: #52c41a;
  }
  #home #bar .logo{
    color: rgb(94, 180, 211);
  }
  #home #bar .logo:hover{
    /*color: #256c91;*/
    cursor: pointer;
  }
  .recomand-link{
    padding: 5px;
  }
  .recomand-link .link-branch{
    padding: 10px;
    color: #4198aa;
    font-family: 'JetBrains';
  }
  .given{
    margin-left: 40%;
    font-family: 'JetBrains';
  }

  .recomand-title{
    margin-left: 37%;
    font-family: 'JetBrains';
  }
</style>
