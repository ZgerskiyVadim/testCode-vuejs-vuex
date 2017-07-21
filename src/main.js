import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import css from 'vue-material/dist/vue-material.css'
import style from 'vue-material/dist/vue-material.css'
import VueTruncate from 'vue-truncate'
import VueRouter from 'vue-router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


import mainPage from './components/mainPage.vue'
import post from './components/post.vue'
import contacts from './components/Contacts.vue'


Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)



const router = new VueRouter({
    history: true,
    hashbang: false,
    linkActiveClass: 'active',
    transitionOnLoad: true,
    routes: [
    { path: '/', component: mainPage },
    { path: '/contacts', component: contacts }, 
    { path: '/post/:id', name: 'post', component: post },

  ]})



new Vue({
  el: '#app',
  router: router,
    store,
    components: {}
    
    
})










