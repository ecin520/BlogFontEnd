import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import creation from '../components/creation/CreativeCenter'
import CreateNotes from '../components/creation/CreateNotes'
import ArticleList from '../components/content/ArticleList'
import ArticleCard from '../components/content/ArticleCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/ArticleList',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/ArticleCard/:id',
          name: 'ArticleCard',
          component: ArticleCard
        }
      ]
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
