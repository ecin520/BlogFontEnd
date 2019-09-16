<template>
    <div id="RightLabel">
      <a :style="FontStyle" v-for="item in labels">{{item.label}} </a>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        labels: [
          {
            label: 'java',
            link: '#'
          },
          {
            label: 'Nio',
            link: '#'
          },
          {
            label: 'springboot',
            link: '#'
          },
          {
            label: 'spring',
            link: '#'
          },
          {
            label: 'springboot',
            link: '#'
          },
          {
            label: 'spring',
            link: '#'
          },

          {
            label: 'Nio',
            link: '#'
          },

          {
            label: 'spring',
            link: '#'
          },
          {
            label: 'java',
            link: '#'
          },
          {
            label: 'Nio',
            link: '#'
          }
        ],
        FontStyle: 'font-size: 14px'
      }
    }
  }
</script>

<style scoped>
  #RightLabel{
    width: 100%;
  }
</style>
