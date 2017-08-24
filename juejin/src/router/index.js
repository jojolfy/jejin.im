import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Nomal from '@/components/Nomal'
import Subscribe from '@/components/Subscribe'

import Zall from '@/components/All'
import User from '@/components/User'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      // name: 'Hello',
      component: Hello
    },
    {
      path: '/timeline',
      component: Nomal,
      children: [{
        path: '',
        // name: 'Hello',
        component: Zall
      }]
    },
    {
      path: '/zhuanlan',
      component: Nomal,
      children: [{
        path: ':id',
        name: 'Zhuanlan',
        component: Zall
      }],
      redirect: '/zhuanlan/all'
    }, {
      path: '/collections',
      component: Nomal,
      children: [{
        path: ':id',
        name: 'Collections',
        component: Zall
      }],
      redirect: '/collections/recommended'
    }, {
      path: '/explore',
      component: Nomal,
      children: [{
        path: ':id',
        name: 'Explore',
        component: Zall
      }],
      redirect: '/explore/all'
    }, {
      path: '/subscribe',
      component: Subscribe,
      children: [{
        path: ':id',
        name: 'Subscribe',
        component: Zall
      }],
      redirect: '/subscribe/all'
    },
    {
      path: '/user',
      component: User,
      children: [{
        path: ':id',
        name: User,
        component: User
      }]
    }
  ]
})
