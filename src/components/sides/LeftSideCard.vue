<template>
  <Card class="left-card">
    <Row>
      <Col span="14">
        <img :src="QQImg"/>
      </Col>
      <Col span="10">
        <a style="font-size: 12px;font-family: Microsoft YaHei UI, serif">{{introduction}}</a>
      </Col>
    </Row>
    <Row>
      <h1 style="text-align: center">Ecin520</h1><br>
      <a>Programming&Enthusiast</a><br><br>
      <p style="text-align: center"><Icon type="ios-navigate-outline" />江西·南昌</p><br>
      <Button style="margin-left: 38px;" type="warning" shape="circle">点击关注</Button>
    </Row>
    <p></p>
  </Card>
</template>

<script>
  export default {
     data(){
       return{
         QQImg: require('@/assets/qq.png'),
         introduction: '江西师范大学软件学院大三在读'
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
    z-index: 888;
  }
  .left-card img{
    width: 80%;
  }
</style>
