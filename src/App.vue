<template>
  <div id="app">
    <div class="bg-color"></div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
/*  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods: {
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }*/
}
</script>

<style>
  @import "./styles/index.css";
</style>
