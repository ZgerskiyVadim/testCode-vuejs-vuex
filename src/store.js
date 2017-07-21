import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
const store = new Vuex.Store({
    
state: {
    total: 2,
    posts: [],
    currentPage: 1, 
    pageRanger: 1, 
    pageRange: 2,
    totalPage: 10,
    perPage: 10,
    page: 1,
    id: null,
    link: "https://jobs.tut.by/vacancy/21716043?query=Junior"
        

  },
     mutations: {
         posts(state, {item}) {
             state.posts = item
         },                  
         currentPage(state, {item}) {
             state.currentPage = item
         },         
         total(state, {item}) {
             state.total = item
         },         
         id(state, {item}) {
             state.id = item
         },
         



     },
    actions: {
        allPosts: function ({ commit }, page, limit ) {
            var options = {
                params: {
                    _page: page,
                    _limit: limit
                    }
                }
        axios.get('https:/jsonplaceholder.typicode.com/comments', options).then((response) => {
            console.log(response)
            commit('posts', { item: response.data })
            commit('id', { item: response.data.id })
            commit('currentPage', { item: page })
            commit('total', { item: response.data.length })
            }, (err) => {
            console.log(err)
          })
    }, 
        
        link() {
            var x = state.link
            return parent.location = x
            }

     
         
}   
})
 export default store