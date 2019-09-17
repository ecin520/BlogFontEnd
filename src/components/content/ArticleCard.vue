<template>
  <div id="ArticleCard">
    <Card>
      <h1>{{id}}</h1>
      <div v-html="article_html"></div>
    </Card>
  </div>
</template>>

<script>
  export default {
    data(){
      return{
        id: this.$route.params.id,
        article_html: '<h1>Fuck</h1>'
      }
    }
  }
</script>

<style scoped>
  #ArticleCard{
    margin: 21px;
  }
</style>
