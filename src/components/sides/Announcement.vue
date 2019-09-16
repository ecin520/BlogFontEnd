<template>
  <Card class="Announcement">
    <h2 slot="title">小公告</h2>
    <p>为了分享作者编程之路的学习心得体会，展示有趣的代码，解决一些技术疑惑，此博客应运而生。</p>
    <a>QQ</a>
    <a style="color: #6ced8a">WeChat</a>
    <a style="color: #eddaa6">我的公众号</a>
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
