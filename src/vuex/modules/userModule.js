import action from '../actions/userAction'

const state = {
    user: {
        userName: "",
        number: "",
        city: "",
        password: ""
    }
}

const mutations = {
    UPDATE_USER(state, userUpdated){
        state.user = userUpdated;
        console.log('MUTATION', state.user);
    }
}

const actions = action;
export default {
    state,
    mutations,
    actions
}
