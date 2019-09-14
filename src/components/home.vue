<template>
  <div id="home">
    <div id="bar">
        <ul>
            <li>
                <i class="logo">
                    <img src="@/assets/logo.png" />
                </i>
            </li>
            <li><a class="bar-title" @click="fuck">个人主页</a></li>
            <li><a class="bar-title" href="#">日志</a></li>
            <li><a class="bar-title" href="#">自我介绍</a></li>
            <li><a class="bar-title" id="help" href="#">帮助</a></li>
        </ul>
    </div>
    <div id="editor">
      <mavon-editor
        style="height:900px;z-index:1"
        v-model="content"
        ref=md
        @imgAdd="$imgAdd"
        placeholder="请开始您的创作..." />
    </div>
<!--    <Button @click="show">CLick me</Button>-->
    <div id="footer">
<!--      <a>This is footer by Ecin520</a>-->
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        msg: 'Waiting',
        markdownOption: {
          bold:true
        },
        handbook: ''
      }
    },
    methods:{
      show(){
        this.handbook=this.content
        alert(this.content)
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
    box-shadow: 0 4px 5px #b4b4b4;
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
    color: #999999;
    font-family: "Microsoft YaHei UI Light",serif;
    display: block;
    padding-top: 7px;
    margin: 10px;
  }
  #home #bar ul li .bar-title:hover{
    color: black;
    font-size: 18px;
  }
  #home #bar .logo{

  }
  #home #bar .logo img{
    padding-top: 3px;
    padding-left: 3px;
    width: 70%;
  }
  #home #editor{
    z-index: 0;
    display: block;
    padding-top: 66px;
    width: 100%;
  }
  #home #footer{
    display: block;
    font-size: 30px;
    position: relative;
    z-index: 1;
    padding-bottom: 0;
  }
</style>
