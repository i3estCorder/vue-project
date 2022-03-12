import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ProvideInject from '../views/ProvideInject.vue'
import Calculator from '../views/CalculatorOptionAPI.vue'
import Calculator2 from '../views/CalcualtorCompositionAPI.vue'
import CompositionAPIProvideAndInject from '../views/ComponsitionAPIProvide.vue'
import Mixins from '../views/ApiMixins.vue'
import PluginExam from '../views/PluginExam.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data_binding',
    name: 'data_binding',
    component: DataBinding
  },
  {
    path: '/nested_component',
    name: 'nested_component',
    component: NestedComponent
  },
  {
    path: '/parent_component',
    name: 'parent_component',
    component: ParentComponent
  },
  {
    path: '/provide_inject',
    name: 'provide_inject',
    component: ProvideInject
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },  
  {
    path: '/calculator2',
    name: 'calculator2',
    component: Calculator2
  },
  {
    path: '/compositionapiprovideandinject',
    name: 'compositionapiprovideandinject',
    component: CompositionAPIProvideAndInject
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: Mixins
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: PluginExam
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
