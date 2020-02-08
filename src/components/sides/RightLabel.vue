<template>
    <div id="RightLabel">
<!--      <a :style="FontStyle" v-for="item in labels">{{item.label}} </a>-->
      <h2 style="font-family: 'JetBrains;">标签云</h2>
      <br>
      <span v-for="(item,itemIndex) in type" :key="item.type_name">
        <a @click="typeClick(item)" class="type-class" :class="{defaultTypeClass: Math.round(Math.random()*100)%2===0}">{{item.type_name}} &nbsp;</a>
      </span>
      <span v-for="(item,itemIndex) in branch" :key="item.branch_name">
        <a @click="branchClick(item)" class="branch-class" :class="{defaultBranchClass: Math.round(Math.random()*100)%2===0}">{{item.branch_name}} &nbsp;</a>
      </span>
      <br><br>


      <h2 style="font-family: 'JetBrains;">文章推荐</h2>
      <br>
      <div style="padding: 4px" v-for="(item,itemIndex) in article" :key="item.title">
        <a style="color: #89b467;" @click="recommendClick(item)" class="type-class" :class="{defaultArticle: Math.round(Math.random()*100)%2===0}"># {{item.title}}</a><br>
      </div>

    </div>
</template>

<script>
  export default {
    data(){
      return{
        type: [
          {
            'type_name': '',
            'type_url': ''
          }
        ],
        branch: [
          {
            'branch_name': '',
            'branch_url': ''
          }
        ],
        article: [
            // id,title,generalize,type_name,branch_name,time,show_image
            {
                id: '',
                title: '',
                generalize: '',
                type_name: '',
                branch_name: '',
                time: '',
                show_image: ''
            }
        ],
        Style: [
          {
            'font-size': '16px'
          }
        ]
      }
    },
    methods: {
      typeClick(item){
        document.getElementById("bar").scrollIntoView();
        // this.$router.go(0)
        this.$router.push({name: 'TypeArchive',params: {id: item.type_name}});
      },
      branchClick(item){
        document.getElementById("bar").scrollIntoView();
        // this.$router.go(0)
        this.$router.push({name: 'BranchArchive',params: {id: item.branch_name}});
      },
      recommendClick(item) {
        document.getElementById("bar").scrollIntoView();
        this.$router.push({name: 'ArticleCard',params: {id: item.id}});
      }
    },
    created() {

      this.$axios({
        url: this.$store.state.host+'/type/selectAllType',
        method: 'get'
      }).then(response=>{
        this.type=response.data
      }).catch(error=>{
        this.$Message.error(error)
      });

      this.$axios({
        url: this.$store.state.host+'/branch/selectAllBranch',
        method: 'get'
      }).then(response=>{
        this.branch=response.data
      }).catch(error=>{
        this.$Message.error(error)
      });

      this.$axios({
          url: this.$store.state.host+'/article/listRecommends',
          method: 'get'
      }).then(response=>{
          this.article = response.data
      }).catch(error=>{
          this.$Message.error(error)
      });

    }
  }
</script>

<style scoped>
  #RightLabel{
    width: 100%;
  }
  .defaultTypeClass{
    font-size: 19px;
    color: #b3b4af;
  }
  .defaultBranchClass{
    font-size: 19px;
    color: #64c4d6;
  }

  .defaultArticle {
    font-size: 19px;
    color: #89b467;
  }

  .article-class {
    color: #89b467;
    font-size: 13px;
    font-family: 'JetBrains';
  }

  .type-class{
    font-size: 13px;
    font-family: 'JetBrains';
    /*color: #6f42c1;*/
  }
  .branch-class{
    font-size: 13px;
    /*color: #64c4d6;*/
    font-family: 'JetBrains';
  }

</style>
