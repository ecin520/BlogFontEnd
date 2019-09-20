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
    <Modal
      v-model="noteModalVisible"
      :closable="false"
      :loading="loading"
      :z-index="10000"
      footer-hide>
<!--      <Input v-model="article.title" placeholder="title" />-->
<!--      <Input v-model="article.generalize" placeholder="title" />-->
<!--      <Button @click="selectTypeName">请选择标签</Button>-->
<!--      <Button @click="selectBranchName">请选择文章类型</Button>-->
<!--      <Button @click="submitForm">提交</Button>-->
      <Row>
        <h1 style="text-align: center">发布文章</h1>
      </Row><br>
      <Row>
        <Col span="4"><h3>文章标题</h3></Col>
        <Col span="20">
          <Input v-model="article.title" placeholder="Title" />
        </Col>
      </Row><br>
      <Row>
        <Col span="4"><h3>展示内容</h3></Col>
        <Col span="20">
          <Input v-model="article.generalize" type="textarea" placeholder="Generalize" />
        </Col>
      </Row><br>
      <Row>
        <Col span="4"><h3>展示图片</h3></Col>
        <Col span="20">
          <Input v-model="article.show_image" type="textarea" placeholder="Generalize" />
        </Col>
      </Row><br>
      <Row>
        <Col span="6">
          <Button @click="selectTypeName">请选择标签</Button>
        </Col>
        <Col span="6">
          <Button @click="selectBranchName">请选择文章类型</Button>
        </Col>
      </Row><br>
      <Row>
        <Button style="margin-left: 80%;" @click="submitForm">提交</Button>
      </Row>
    </Modal>

    <Modal
      v-model="typeModalVisible"
      :closable="false"
      :loading="loading"
      :z-index="10001"
      :styles="{width: '230px',top: '220px'}"
      footer-hide>
      <RadioGroup v-model="typeGoup">
        <Radio v-for="typeName in typeNameGroup" :label="typeName.type_name"></Radio>
      </RadioGroup>
    </Modal>

    <Modal
      v-model="branchModalVisible"
      :closable="false"
      :loading="loading"
      :z-index="10009"
      :styles="{width: '230px',top: '220px'}"
      footer-hide>
<!--      <RadioGroup v-model="branchGoup">-->
<!--        <Radio v-for="branchName in branchNameGroup" :label="branchName.branch_name"></Radio>-->
<!--      </RadioGroup>-->
      <CheckboxGroup style="" v-model="branchGroup">
        <Checkbox v-for="branchName in branchNameGroup" :label="branchName.branch_name">
<!--          <Icon type="logo-twitter"></Icon>-->
          <span>{{branchName.branch_name}}</span>
        </Checkbox>
      </CheckboxGroup>
    </Modal>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          article_title: '',
          noteModalVisible: false,
          typeModalVisible: false,
          branchModalVisible: false,
          article: [
            {
              'title': '',
              'generalize': '',
              'content': '',
              'article_url': '',
              'type_name': '',
              'branch_name': '',
              'show_image': ''
            }
          ],
          typeNameGroup: [
            {
              'type_name': 'Java'
            },
            {
              'type_name': 'Python'
            },
            {
              'type_name': 'C++'
            }
          ],
          branchNameGroup: [
            {
              'branch_name': '反射'
            },
            {
              'branch_name': '集合'
            },
            {
              'branch_name': '非阻塞IO'
            }
          ]
        }
      },
      methods: {
        SaveContent(value,render){
          this.noteModalVisible = true
        },
        submitForm(){
          alert(this.article.title)
        },
        selectTypeName(){
          this.typeModalVisible = true;
        },
        selectBranchName(){
          this.branchModalVisible = true;
        }
      },
      created() {
        // this.noteModalVisible = true
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
