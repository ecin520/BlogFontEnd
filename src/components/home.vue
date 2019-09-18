<template>
  <div id="home">
    <Layout>
<!--      <Header style="background: white">-->
        <div id="bar">
          <ul>
            <li>
              <i class="logo">
                <Icon size="57" type="logo-github" />
<!--                <Icon size="56" type="logo-tux" />-->
<!--                <img src="@/assets/logo.png" alt="" />-->
              </i>
            </li>
            <li><a class="bar-title" @click="fuck">个人主页</a></li>
            <li><a class="bar-title" @click="date" href="#">日志</a></li>
            <li><a class="bar-title" id="self" href="#">自我介绍</a></li>
            <li><a class="bar-title" id="help" href="#">帮助</a></li>
            <li><Input class="bar-title" id="search" search placeholder="search" /></li>
            <!--            <li><a class="bar-title" id="creation" @click="creationClick">Creation</a></li>-->
            <li>
              <div id="creation"
                      placement="bottom-end"
                      width="190">
                <a class="bar-title" @click="enterClick"><Icon size="40" type="ios-send-outline" /></a>
              </div>
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
        <Divider/>
<!--        <Row>-->
          <Col span="8">
            <ul style="float: left;text-align: center;list-style-type: none;">
              <li>作者其他平台</li><br>
              <li><a href="https://github.com//ecin520" target="_blank"><Icon size="24" type="logo-github" /> github</a></li><br>
              <li><a href="https://blog.csdn.net/ecin520" target="_blank"><Icon size="24" type="ios-paper-plane-outline" />CSDN</a></li><br>
              <li><a target="_blank"><Icon size="24" type="ios-call" />Telphone</a></li><br>
              <li><a target="_blank"><Icon size="24" type="ios-mail-outline" />Gmail</a></li><br>
            </ul>
          </Col>
          <Col span="8">
            <ul style="float: left;text-align: center;list-style-type: none;">
              <li>推荐链接</li><br>
              <li><a href="https://cn.vuejs.org/" target="_blank">Vue中文官网</a></li><br>
              <li><a href="https://mvnrepository.com/" target="_blank">Maven</a></li><br>
              <li><a href="https://spring.io/" target="_blank">Spring</a></li><br>
              <li><a href="https://start.spring.io/" target="_blank">SpringBoot</a></li><br>
            </ul>
          </Col>
          <Col span="8">
            &nbsp;&nbsp;&nbsp;&nbsp;捐赠Alipay<br>
            <img width="100px" src="@/assets/alipay.png"/>
            <br>&nbsp;&nbsp;捐赠WeChat<br>
            <img width="100px" src="@/assets/wechat.png"/>
          </Col>
<!--          <Divider/>-->
<!--          <p style="text-align: center">@Edited by ENCode</p>-->
<!--        </Row>-->
<!--        <Row>-->
<!--          <Divider/>-->
<!--          <p style="text-align: center">@Edited by ENCode</p>-->
<!--        </Row>-->
      </Footer>
    </Layout>

    <Modal
      v-model="ModalVisible"
      :closable="false"
      :loading="loading"
      :styles="{width: '280px',top: '190px'}"
      footer-hide>
      <h3 style="text-align: center"><Icon size="50" type="md-key" />At the Modal,input the private key to entry the editor.</h3><br>
        <Input type="textarea" placeholder="private key"/><br><br>
        <a @click="entryEditor" style="margin-left: 100px;"><Icon  size="40" type="md-checkmark" /></a>
    </Modal>


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
        ModalVisible: false,
        QQModalVisible: false,
        tempData: [
          1,2,3,4,5
        ]
      }
    },
    methods:{
      fuck(){
        this.$router.push({path: '/ArticleList'})
        // this.$router.go(0)
      },
      date(){
        this.$router.push({path: '/ArticleList'})
      },
      enterClick(){
        this.ModalVisible = true
      },
      entryEditor(){
        this.$router.push({path: '/creation'});
      }
    },
    mounted() {
      this.date();
    },
    created() {
      this.date();
    }
  }

</script>
<style scoped>
  @media screen and (max-width: 800px){
    #home #side-content #left-side{
      display: none;
    }
    #home #content{
      margin: auto;
      width: 515px;
      /*margin-left: 0px;*/
    }
  }
  @media screen and (max-width: 720px) {
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

    #home #bar #search{
      display: none;
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

  #home #bar #search{
    position: absolute;
    width: 20%;
    right: 200px;
    margin-top: 2px;
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
    padding-top: 12px;
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
    margin-top: 70px;
  }

  #home #left-side{
    background: none;
  }

  #home #right-side{
    /*margin-right: 10px;*/
    background: none;
  }




</style>
