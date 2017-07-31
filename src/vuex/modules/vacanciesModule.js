import action from '../actions/vacancyAction'

const state = {
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
};

const mutations = {
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
};

const actions = action;

export default {
    state,
    mutations,
    actions
}
