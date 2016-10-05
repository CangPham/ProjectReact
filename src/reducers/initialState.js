export default {
    login: {
        isFetching: false,
        isAuthenticated: localStorage.getItem('id_token') ? true : false
    }
}