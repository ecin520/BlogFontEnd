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
            <li><a class="bar-title" href="#">日志</a></li>
            <li><a class="bar-title" href="#">自我介绍</a></li>
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

    <div id="footer">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        showContent: ''
        // toolbars: {
        //   language: 'en',
        //   htmlcode: true,
        //   save: true,
        //   subfield: true,
        //   preview: true
        // }
      }
    },
    methods:{
      fuck(){
        alert(this.content)
        this.showContent=this.content;
      },
      enterClick(){
        if(this.key === ''){
          this.$router.push({path: '/creation'});
        }
        else
          alert('error go away')
      }
    }
  }
</script>
<style scoped>
  @media screen and (max-width: 375px) {
    #home #bar ul li #help{
      display: none;
    }
  }
  div {
    position: relative;
  }
  #home #bar {
    z-index: 1;
  }
  #home #bar ul{
    box-shadow: 0 2px 5px #b4b4b4;
    list-style-type: none;
    width: 100%;
    position: fixed;
    font-size: 16px;
    background: white;
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
</style>
