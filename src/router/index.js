import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import creation from '../components/creation/CreativeCenter'
import CreateNotes from '../components/creation/CreateNotes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/creation',
      name: 'creation',
      component: creation
    },
    {
      path: '/CreateNotes',
      name: 'CreateNotes',
      component: CreateNotes
    }
  ]
})
