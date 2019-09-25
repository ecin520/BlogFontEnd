<template>
  <Card class="left-card"  style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
    <Row>
      <Col span="14">
        <img :src="QQImg"/>
      </Col>
      <Col span="10">
        <a style="font-size: 13px;font-family: 'Segoe UI';color: #70bfd9;">{{introduction}}</a>
      </Col>
    </Row>
    <Row>
      <h1 style="text-align: center;">Ecin520</h1><br>
      <a>Programming♦Enthusiast</a><br><br>
      <p style="text-align: center;color: #52c41a;"><Icon size="24" type="ios-navigate-outline" />江西·南昌</p><br>
      <Button @click="showQQ" style="margin-left: 38px;" type="warning" shape="circle">点击关注</Button>
    </Row>
    <Row>
      <br>&nbsp;&nbsp;
      <a @click="ScrollTop(speed)" style="font-family: 'Microsoft YaHei UI Light',serif;color: #ed4014">Go Top</a>
      <Divider type="vertical" />
      <a @click="ScrollDown(speed)" style="font-family: 'Microsoft YaHei UI Light',serif;color: #ed4014">Go Down</a>
    </Row>

    <Modal
      v-model="QQModalVisible"
      :closable="false"
      :loading="loading"
      :styles="{width: '230px',top: '70px'}"
      footer-hide>
      <img style="width: 100%" :src="QQImg"/><br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon size="50" type="logo-tux" />
      <a style="font-size: 16px;font-family: 'Microsoft JhengHei Light'">QQ875631208</a>
<!--      <Row>-->
<!--        <Col span="12">-->
<!--          <img style="width: 100%" :src="QQImg"/>-->
<!--        </Col>-->
<!--        <Col span="12">-->
<!--          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon size="50" type="logo-tux" />-->
<!--          <a style="font-size: 16px;font-family: 'Microsoft JhengHei Light'">QQ875631208</a>-->
<!--        </Col>-->
<!--      </Row>-->
    </Modal>
  </Card>

</template>

<script>
  export default {
   data(){
     return{
       QQImg: require('@/assets/qq.png'),
       introduction: '江西师范大学软件学院大三在读',
       QQModalVisible: false,
       speed: 50
     }
   },
   methods:{
     showQQ(){
       this.QQModalVisible = true
     },
     ScrollTop(){
       // document.getElementById("bar").scrollIntoView();
       let distance = document.documentElement.scrollTop || document.body.scrollTop;
       let step = distance/20;
       (function jump(){
         if(distance > 0){
           distance-=step;
           window.scrollTo(0,distance);
           setTimeout(jump,10)
         }
       })();

     },
     ScrollDown(){
       document.getElementById("footer").scrollIntoView();
     }
    }
  }
</script>

<style scoped>
  .left-card{
    width: 190px;
    margin-left: 10px;
    margin-top: 20px;

    position: -webkit-sticky;
    position: sticky;
    top: 65px;
    z-index: 0;
  }
  .left-card img{
    width: 90%;
  }
</style>
