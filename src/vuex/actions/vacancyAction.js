import axios from 'axios'

function favoriteVacancyId ({commit}, idOfVacancy){
    console.log('favoriteVacancyId', idOfVacancy);
    axios.post('someUrl', idOfVacancy)
        .then(response => {if(response){console.log('Everything is greate')}})
        .catch(err => err)
}

function allPosts({ commit }, page, limit ) {
    const options = {
        params: {
            _page: page,
            _limit: limit
        }
    };
    axios.get('https:/jsonplaceholder.typicode.com/comments', options).then((response) => {
        response.data.forEach(post => {
            if(post.isFavorite = 'underfined'){
                post.isFavorite = false;
            }
        });
        commit('posts', { item: response.data });
        commit('id', { item: response.data.id });
        commit('currentPage', { item: page });
        commit('total', { item: response.data.length })
    })
        .catch(err => err)
}

function link() {
    const x = state.link;
    return parent.location = x
}

export default {
    favoriteVacancyId,
    allPosts,
    link
}