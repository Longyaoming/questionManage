import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
]


const router:any = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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
