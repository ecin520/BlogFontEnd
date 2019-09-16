<template>
  <div id="CreativeCenter">
    <div>
      <Card>
        <a href="">Go Home</a>
      </Card>
    </div>
    <div id="show-card">
      <Row>
        <Col class="side-col" span="5">
          &nbsp;
        </Col>
        <Col span="14">
          <img class="back-ground" @click="fuck" src="@/assets/head.png" />
          <Card id="select-card">
            <br><br><br><br><br><br>
            <Row>
              <Col span="12"><Button type="success" @click="createNotes">创建笔记</Button></Col>
              <Col span="12"><Button type="success" >编辑笔记</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button type="error" disabled>等待开发</Button></Col>
              <Col span="12"><Button type="error" disabled>等待开发</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button type="error" disabled>等待开发</Button></Col>
              <Col span="12"><Button type="error" disabled>等待开发</Button></Col>
            </Row><br>
          </Card>
        </Col><Col class="side-col" span="5"></Col>
      </Row>
    </div>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          element: '<h1>Hello world</h1>'
        }
      },
      methods: {
        createNotes(){
          this.$router.push({path: '/CreateNotes'});
        }
      }
    }
</script>

<style scoped>
  @media screen and (max-width: 430px){

  }
  #CreativeCenter #show-card{
    /*background: linear-gradient(#7dc2ff, #fffffb);*/
    /*position: fixed;*/
    padding: 150px 0;
    margin: auto;
    width: 500px;
    text-align: center;
  }

  #CreativeCenter #show-card .back-ground{
    position: relative;
    z-index: 1;
    border-radius: 360px;
    border: 2px solid;
    width: 55%;
    transition: all 0.5s linear;
  }

  #CreativeCenter #show-card .back-ground:hover{
    transform: rotate(360deg);
    /*transform: translate(0px,-30px);*/
    width: 60%;
  }

  #CreativeCenter #show-card #select-card{
    z-index: 0;
    margin-top: -80px;
    width: 100%;
    /*background: linear-gradient(#fffffb, #c1e5ff);*/
  }
</style>
