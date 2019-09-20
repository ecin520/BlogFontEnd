<template>
  <Card class="Announcement" style="border-radius:13px;">
    <h2 slot="title">小公告</h2>
    <p>为了分享作者编程之路的学习心得体会，展示有趣的代码，解决一些技术疑惑，此博客应运而生。</p>
    <a><h4>QQ</h4></a>
    <a><h4 style="">WeChat</h4></a>
    <a><h4 style="">我的公众号</h4></a>
  </Card>
</template>

<script>
    export default {
        name: "announcement"
    }
</script>

<style scoped>
  .Announcement{
    margin-right: 10px;
    margin-top: 90px;
  }
</style>
