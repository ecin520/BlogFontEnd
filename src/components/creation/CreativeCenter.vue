<template>
  <div id="CreativeCenter">
    <div id="show-card" class="animated bounce fadeInDown">
      <Row>
        <Col class="side-col" span="5">
          &nbsp;
        </Col>
        <Col span="14">
          <!--          <img class="back-ground" @click="fuck" src="@/assets/head.png" />-->
          <a @click="Home" class="back-ground">
            <!--            <Icon size="150" type="ios-bonfire-outline" />-->
            <Icon size="150" type="md-finger-print" />
          </a>
          <Card id="select-card" style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;">
            <br><br><br><br><br><br>
            <Row>
              <Col span="12"><Button size="large" type="success" @click="createNotes">创建笔记</Button></Col>
              <Col span="12"><Button size="large" type="success" @click="editNotes">编辑笔记</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button size="large" @click="typeClick" type="info" >添加类型</Button></Col>
              <Col span="12"><Button size="large" type="info" @click="branchClick">添加分支</Button></Col>
            </Row><br>
            <Row>
              <Col span="12"><Button size="large" @click="logout" type="error" >退出登陆</Button></Col>
              <Col span="12">
                <Button size="large" type="error" @click="deleteNullTypeBranch">删除空类</Button>
              </Col>
            </Row><br>
          </Card>
        </Col><Col class="side-col" span="5"></Col>
      </Row>
    </div>

    <Modal
      v-model="type_visible"
      :closable="false"
      :loading="loading"
      :z-index="10001"
      :styles="{width: '230px',top: '240px'}"
      footer-hide>
      <h1 style="text-align: center">类型名称<Input v-model="type_name" /></h1><br>
      <div style="display: flex;justify-content: center">
        <Button @click="addType" style="">添加类型</Button><br><br>
      </div>

    </Modal>

    <Modal
      v-model="branch_visible"
      :closable="false"
      :loading="loading"
      :z-index="10001"
      :styles="{width: '230px',top: '240px'}"
      footer-hide>
      <h1 style="text-align: center">分支名称<Input v-model="branch_name" /></h1><br>
      <div style="display: flex;justify-content: center">
        <Button @click="addBranch"  style="float: right">添加分支</Button><br><br>
      </div>

    </Modal>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        element: '<h1>Hello world</h1>',
        type_visible: false,
        branch_visible: false,
        color: '#6ea7ff'
      }
    },
    methods: {
      createNotes(){
        this.$router.push({path: '/CreateNotes'});
      },
      Home(){
        this.$router.push({path: '/ArticleList'});
      },
      typeClick(){
        this.type_visible = true;
      },
      branchClick(){
        this.branch_visible = true;
      },
      addType(){

        this.$axios({
          url: this.$store.state.host+'/type/insertType',
          method: 'post',
          data: {
            type_name: this.type_name,
            type_url: '',
          }
        }).then(response=>{
          this.type_visible = false;
          this.$Message.info('Success');
        }).catch(error=>{
          this.$Message.error('Fail');
        });

      },
      addBranch(){

        this.$axios({
          url: this.$store.state.host+'/branch/insertBranch',
          method: 'post',
          data: {
            branch_name: this.branch_name,
            branch_url: '',
          }
        }).then(response=>{
          this.branch_visible = false;
          this.$Message.info('Success');
        }).catch(error=>{
          this.$Message.error('Fail');
        });

      },
      editNotes(){
        this.$router.push({name: 'DeleteArticle'});
      },
      logout(){
        this.$cookies.remove('isLogin');
        this.$Message.info('清除cookie成功');
        this.$router.push({name: 'ArticleList'});
      },
      deleteNullTypeBranch(){

        this.$axios({
          url: this.$store.state.host+'/core/deleteNullTypeBranch',
          method: 'get'
        }).then(response=>{
          this.$Message.info('Success');
        }).catch(error=>{
          // this.$Message.error('Fail');
        });

      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 430px){

  }

  #CreativeCenter{
    background: linear-gradient(#6456d3, white);
  }

  #CreativeCenter #show-card{
    /*background: linear-gradient(#7dc2ff, #fffffb);*/
    /*position: fixed;*/
    padding: 150px 0;
    margin: auto;
    /*min-width: 600px;*/
    text-align: center;
  }

  #CreativeCenter #show-card .back-ground{
    position: relative;
    z-index: 1;
    color: #919eff;
    /*background: white;*/
    /*border-radius: 360px;*/
    /*border: 2px solid;*/
    /*width: 55%;*/
    /*transition: all 0.5s linear;*/
  }

  #CreativeCenter #show-card .back-ground:hover{
    transform: rotate(360deg);
    color: #ffaa6d;
    transition: all 0.3s linear;
    /*transform: translate(0px,-30px);*/
  }

  #CreativeCenter #show-card #select-card{
    z-index: 0;
    margin-top: -80px;
    width: 100%;
    /*background: linear-gradient(#fffffb, #c1e5ff);*/
  }
</style>
