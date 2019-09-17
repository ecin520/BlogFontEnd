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
      <h1 style="text-align: center;">Ecin520</h1><br>
      <a>Programming&Enthusiast</a><br><br>
      <p style="text-align: center;color: #52c41a;"><Icon size="24" type="ios-navigate-outline" />江西·南昌</p><br>
      <Button @click="showQQ" style="margin-left: 38px;" type="warning" shape="circle">点击关注</Button>
    </Row>
    <p></p>
    <Modal
      v-model="QQModalVisible"
      :closable="false"
      :loading="loading"
      :styles="{width: '230px',top: '190px'}"
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
         QQModalVisible: false
       }
     },
    methods: {
       showQQ(){
         this.QQModalVisible = true
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
    width: 90%;
  }
</style>
