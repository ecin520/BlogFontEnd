<template>
    <div id="RightLabel">
<!--      <a :style="FontStyle" v-for="item in labels">{{item.label}} </a>-->
      <h2>标签云</h2>

      <span v-for="(item,itemIndex) in type" :key="item.type_name">
        <a @click="typeClick(item)" class="type-class" :class="{defaultTypeClass: Math.round(Math.random()*100)%2===0}">{{item.type_name}} &nbsp;</a>
      </span>
      <span v-for="(item,itemIndex) in branch" :key="item.branch_name">
        <a @click="branchClick(item)" class="branch-class" :class="{defaultBranchClass: Math.round(Math.random()*100)%2===0}">{{item.branch_name}} &nbsp;</a>
      </span>

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
      }
    },
    created() {

      this.$axios({
        url: '/api/type/selectAllType',
        method: 'get'
      }).then(response=>{
        this.type=response.data
      }).catch(error=>{
        this.$Message.error(error)
      });

      this.$axios({
        url: '/api/branch/selectAllBranch',
        method: 'get'
      }).then(response=>{
        this.branch=response.data
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
  .type-class{
    /*color: #b3b4af;*/
    font-size: 14px;
  }
  .branch-class{
    font-size: 16px;
    /*color: #64c4d6;*/
  }

</style>
