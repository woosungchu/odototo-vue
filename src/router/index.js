import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blank from '@/components/blank/Blank'
import Words from '@/components/words/Words'
import PixelArt from '@/components/PixelArt/PixelArt'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Blank', name: 'Blank', component: Blank },
    { path: '/Words', name: 'Words', component: Words },
    { path: '/PixelArt', name: 'PixelArt', component: PixelArt }
  ]
})
