import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import Audio from '@/pages/Audio/audio'
import Broadcast from '@/pages/Broadcast/broadcast'
import Group from '@/pages/Group/group'
import Mine from '@/pages/Mine/mine'

import Film from '@/components/film'
import Tv from '@/components/tv'
import Read from '@/components/read'
import Music from '@/components/music'
import City from '@/components/city'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children: [
        {path: 'film', component: Film},
        {path: 'tv', component: Tv},
        {path: 'city', component: City},
        {path: 'read', component: Read},
        {path: 'music', component: Music}
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
