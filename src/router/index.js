import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blank from '@/components/Blank'
import Words from '@/components/Words'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Blank', name: 'Blank', component: Blank },
    { path: '/Words', name: 'Words', component: Words }
  ]
})
