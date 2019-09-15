<template>
    <div id="CreativeCenter">
      <Row>
        <Col class="side-col" span="7">&nbsp;</Col>
        <Col span="10">
          <img class="back-ground" @click="fuck" src="@/assets/head.png" />
          <Card id="select-card">
            <br><br><br><br><br><br>
            <Row>
              <Col span="12"><Button @click="createNotes">创建笔记</Button></Col>
              <Col span="12"><Button>编辑笔记</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button>等待开发</Button></Col>
              <Col span="12"><Button>等待开发</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button>等待开发</Button></Col>
              <Col span="12"><Button>等待开发</Button></Col>
            </Row><br>
          </Card>
        </Col><Col class="side-col" span="7"></Col>
      </Row>
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
  #CreativeCenter{
    /*background: linear-gradient(#7dc2ff, #fffffb);*/
    /*position: fixed;*/
    padding: 50px 0;
    text-align: center;
  }

  #CreativeCenter .side-col{
    font-size: 20px;
  }


  #CreativeCenter .back-ground{
    position: relative;
    z-index: 1;
    border-radius: 360px;
    border: 2px solid;
    width: 60%;
    transition: all 0.5s linear;
  }

  #CreativeCenter .back-ground:hover{
    transform: rotate(360deg);
    /*transform: translate(0px,-30px);*/
    width: 70%;
  }

  #CreativeCenter #select-card{
    z-index: 0;
    margin-top: -80px;
    /*background: linear-gradient(#fffffb, #c1e5ff);*/
  }
</style>
