import Vue from 'vue'
import Vuex from 'vuex'
import vacanciesModule from './vuex/modules/vacanciesModule'
import userModule from './vuex/modules/userModule'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        vacanciesModule,
        userModule
    }
})