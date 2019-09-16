<template>
    <div id="RightLabel">
<!--      <a :style="FontStyle" v-for="item in labels">{{item.label}} </a>-->
      <h2>标签云</h2>
      <a style="font-size: 15px">Java</a>
      <a style="font-size: 12px">Python</a>
      <a style="font-size: 19px">Linux</a>
      <a style="font-size: 12px">MySql</a>
      <a style="font-size: 22px">Docker</a>
      <a style="font-size: 12px">Spring</a>
      <a style="font-size: 12px">Nio</a>
      <a style="font-size: 18px">Mina</a>
      <a style="font-size: 16px">Vue</a>
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
