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

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/ArticleList',
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
      component: creation,
      beforeEnter: (to,from,next)=>{
        let isLogin = router.app.$cookies.get('isLogin');
        if(isLogin === null){
          router.push('/ArticleList')
        }
        else if(isLogin === 'hello world'){
          next();
        }
      }
    },
    {
      path: '/CreateNotes',
      name: 'CreateNotes',
      component: CreateNotes,
      beforeEnter: (to,from,next)=>{
        let isLogin = router.app.$cookies.get('isLogin');
        if(isLogin === null){
          router.push('/ArticleList')
        }
        else if(isLogin === 'hello world'){
          next();
        }
      }
    },
    {
      path: '/DeleteArticle',
      name: 'DeleteArticle',
      component: DeleteArticle,
      beforeEnter: (to,from,next)=>{
        let isLogin = router.app.$cookies.get('isLogin');
        if(isLogin === null){
          router.push('/ArticleList')
        }
        else if(isLogin === 'hello world'){
          next();
        }
      }
    },
    {
      path: '/EditArticle/:id',
      name: 'EditArticle',
      component: EditArticle,
      beforeEnter: (to,from,next)=>{
        let isLogin = router.app.$cookies.get('isLogin');
        if(isLogin === null){
          router.push('/ArticleList')
        }
        else if(isLogin === 'hello world'){
          next();
        }
      }
    }
  ]
});
export default router;
