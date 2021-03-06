import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Dianpu from '@/components/page/dianpu'
import Goods from '@/components/page/goods'
import Huiyuan from '@/components/page/huiyuan'
import Shezhi from '@/components/page/shezhi'
import Shouyin from '@/components/page/shouyin'
import Tongji from '@/components/page/tongji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/huiyuan',
      name: 'Huiyuan',
      component: Huiyuan
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/dianpu',
      name: 'Dianpu',
      component: Dianpu
    },
    {
      path: '/shezhi',
      name: 'Shezhi',
      component: Shezhi
    },
    {
      path: '/tongji',
      name: 'Tongji',
      component: Tongji
    },
    {
      path: '/shouyin',
      name: 'Shouyin',
      component: Shouyin
    }
  ]
})
