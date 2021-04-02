import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

import LayoutWrap from '../views/LayoutWrap/Index.vue'  //布局容器

Vue.use(VueRouter)

export const asyncRouterMap = [
  {
    path: '/',
    name: 'dashboad',
    component: LayoutWrap,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'fa el-icon-s-opportunity'},
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/KnowledgeManage',
    name: 'KnowledgeManage',
    component: LayoutWrap,
    meta: { title: '数据管理', icon: 'fa el-icon-menu'},
    redirect: '/AllKnowledgeData',
    children: [
      {
        path: '/AllKnowledgeData',
        name: 'AllKnowledgeData',
        meta: { title: '知识总览', icon: 'fa fa-table'},
        component: () => import('@/views/KnowledgeManage/AllKnowledgeData.vue')
      },
      {
        path: '/MyKnowledgeData',
        name: 'MyKnowledgeData',
        meta: { title: '我的知识', icon: 'fa fa-file-text-o'},
        component: () => import('@/views/KnowledgeManage/MyKnowledgeData.vue')
      },
      {
        path: '/BackupScrapsPaper',
        name: 'BackupScrapsPaper',
        meta: { title: '我的纸屑', icon: 'fa el-icon-delete'},
        component: () => import('@/views/KnowledgeManage/BackupScrapsPaper.vue')
      }
    ]
  },
  
  {
    path: '/Login',
    name: 'Login',
    component: () => import("@/views/Login/Login.vue")
  },
  {
    path: '/Password',
    name: 'Password',
    component: () => import("@/views/Login/Password.vue")
  },
  {
    path: '/404',
    name: '404',
    component: () => import("@/views/404.vue")
  },
  {
    path: '*',
    redirect: '/404'
  },
]



const router:any = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:asyncRouterMap
})

router.beforeEach((to:any, from:any, next:any):void => {
  const isLogin = localStorage.tsToken ? true : false;
  if(to.name == "Login" || to.name == "Password"){
    next();
  }else{
    isLogin ? next() : next("Login")
  }
})

export default router
