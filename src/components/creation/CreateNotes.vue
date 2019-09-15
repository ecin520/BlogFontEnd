<template>
  <div id="CreateNotes">

<!--    <Input class="title-input" size="large" v-model="article_title" placeholder="Input the title" />-->
    <mavon-editor
      class="editor"
      v-model = "content"
      @imgAdd = "$imgAdd"
      :toolbars = "toolbars"
      :ishljs = "true"
      :tabSize = 4
      @save = "SaveContent"
      placeholder = "Begin your editor..."></mavon-editor>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          article_title: ''
        }
      },
      methods: {
        SaveContent(value,render){
          alert(render)
        }
      }
    }
</script>

<style scoped>
  #CreateNotes .editor{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
