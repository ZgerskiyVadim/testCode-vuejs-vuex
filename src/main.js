import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import css from 'vue-material/dist/vue-material.css'
import style from 'vue-material/dist/vue-material.css'
import VueTruncate from 'vue-truncate'
import VueRouter from 'vue-router'
import {store} from './store'
import VueResource from 'vue-resource'

import mainPage from './components/MainPage.vue'
import post from './components/Post.vue'
import contacts from './components/Contacts.vue'
import Settings from './components/Settings.vue'
import headerComponent from './components/headerComponent/Header.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    history: true,
    hashbang: false,
    linkActiveClass: 'active',
    transitionOnLoad: true,
    routes: [
        { path: '/', component: mainPage },
        { path: '/contacts', component: contacts },
        { path: '/post/:id', name: 'post', component: post },
        {path: '/settings', component: Settings}
    ]})

new Vue({
    el: '#app',
    router,
    store,
    components: {headerComponent}
})
