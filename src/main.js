import Vue from 'vue'
import VueResource from 'vue-resource'
import Main_row from './components/Main_row.vue'
import Hello from './components/Hello.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import css from 'vue-material/dist/vue-material.css'
import style from 'vue-material/dist/vue-material.css'
import VueTruncate from 'vue-truncate'
import VueRouter from 'vue-router'


var Brands = require('./view/Brands.vue')
var Vacancy = require('./components/Main_row.vue')
var Contacts = require('./view/Contacts.vue')
var Projects = require('./view/Projects.vue')
var Blog = require('./view/Blog.vue')
var Post = require('./view/Post.vue')
var Json = require('./view/Json.vue')
Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.use(VueRouter)







const routera = new VueRouter({
   mhistory: true,
    hashbang: false,
     linkActiveClass: 'active',
    transitionOnLoad: true,
  routes: [
      
    { path: '/brands', component: Brands },
    { path: '/', component: Main_row },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/post/:id', name: 'post', component: Hello },
    { path: '/json', component: Json},
  ]})



new Vue({
  el: '#app',
  router: routera
    
    
})










