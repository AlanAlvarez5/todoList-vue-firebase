import Vue from 'vue'
import VueRouter from 'vue-router'

var firebase = require('firebase/app')

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta: { requiresAuth: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const rutaProtegida = to.matched.some( record => record.meta.requiresAuth);
  const user = firebase.auth().currentUser;
  if(rutaProtegida && user === null){
    next({name: 'Ingreso'})
  }else{
    next()
  }
})
export default router
