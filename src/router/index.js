import Vue from 'vue'
import VueRouter from 'vue-router'

const login=()=>import('../views/login')
const home=()=>import('../views/home')
const user=()=>import('../views/user')
const songsheet=()=>import('../views/songsheet')
const category=()=>import('../views/category')

Vue.use(VueRouter)

const routes = [
   
   {
    path:'/login',
    component:login,
    meta:{
      hidelbar:true
    }
   },
   {
     path:'/home',
     component:home ,
     meta:{
      hidelbar:false
    }
   },
   {
      path:'/user',
      component:user,
      meta:{
        hidelbar:false
      }
   },
   {
        path:'/songsheet',
        component:songsheet,
        meta:{
          hidelbar:false
        }
   },{
    path:'/category',
    component:category,
    meta:{
      hidelbar:false
    }
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
