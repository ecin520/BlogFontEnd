import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import creation from '../components/creation/CreativeCenter'
import CreateNotes from '../components/creation/CreateNotes'
import ArticleList from '../components/content/ArticleList'
import ArticleCard from '../components/content/ArticleCard'
import Archive from '../components/date/Archive'
import TypeArchive from '../components/date/TypeArchive'
import BranchArchive from '../components/date/BranchArchive'
import DeleteArticle from '../components/operating/DeleteArticle'
import EditArticle from '../components/operating/EditArticle'
import Self from '../components/relax/Self'
import Tips from '../components/help/Tips'

Vue.use(Router);

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
        },
        {
          path: '/Archive',
          name: 'Archive',
          component: Archive
        },
        {
          path: '/TypeArchive/:id',
          name: 'TypeArchive',
          component: TypeArchive
        },
        {
          path: '/BranchArchive/:id',
          name: 'BranchArchive',
          component: BranchArchive
        },
        {
          path: '/Self',
          name: 'Self',
          component: Self
        },
        {
          path: '/Tips',
          name: 'Tips',
          component: Tips
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
    },
    {
      path: '/DeleteArticle',
      name: 'DeleteArticle',
      component: DeleteArticle
    },
    {
      path: '/EditArticle/:id',
      name: 'EditArticle',
      component: EditArticle
    }
  ]
})
