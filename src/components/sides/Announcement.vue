<template>
  <Card class="Announcement"
        :bordered="false"
        :dis-hover="false"
        style="border-radius:13px;box-shadow: 1px 1px 6px #adadad;background: rgb(97,181,212);">
<!--    -->
    <h2 style="font-family: 'JetBrains';color: white" slot="title">小公告</h2>
    <p style="color: white;font-family: 'JetBrains';">练手项目，前后端一起写了三四天，于9.20日具备雏形，总之可以增删改查博客了，适配各种设备啥的理论没啥问题了，小细节方面还是花了点功夫的。就拿SSM框架练练手。做完后，用SpringBoot重构了代码。前端采用Vue.js。本博客支持md格式文件渲染成github-markdown-css风格，修改了源代码的一些色调与字体，前后台部署于一台廉价Linux服务器运行。</p><br>
<!--    <a @click="showQQ" style="font-size: 16px;color: #3f6ebf;"><Icon size="23" type="logo-octocat" />QQ</a>-->
<!--    &nbsp;&nbsp;&nbsp;-->
<!--    <a @click="showQQ" style="font-family: 'JetBrains Mono',serif;font-size: 16px;color: #3f6ebf;"><Icon size="23" type="logo-octocat" />WeChat</a><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
<!--    <a @click="showQQ" style="font-family: 'JetBrains Mono',serif;font-size: 16px;color: #626679;"><Icon size="23" type="logo-octocat" />我的公众号</a>-->
    <Modal
      v-model="QQModalVisible"
      :closable="false"
      :loading="loading"
      :styles="{width: '230px',top: '70px'}"
      footer-hide>
      <img style="width: 100%" :src="QQImg"/><br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon size="50" type="logo-tux" />
      <a style="font-size: 16px;font-family: 'Microsoft JhengHei Light'">QQ875631208</a>
    </Modal>
  </Card>
</template>

<script>
  export default {
    data(){
      return{
        QQImg: require('@/assets/qq.png'),
        QQModalVisible: false
      }
    },
    methods:{
      showQQ(){
        this.QQModalVisible = true
      }
    }
  }
</script>

<style scoped>
  .Announcement{
    margin-right: 10px;
    margin-top: 20px;
    box-shadow: 1px 1px 6px #adadad;
  }
</style>
