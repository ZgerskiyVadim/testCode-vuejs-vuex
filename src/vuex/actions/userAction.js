import axios from 'axios'

    function UpdateUser({commit}, user) {
    console.log("ACTION", user);
    commit('UPDATE_USER', user);
    axios.put('someUrl' + "id", user)
        .then(response => {
            console.log("ACTION", response);

        })
        .catch(err => err);
}

export default {
    UpdateUser
}