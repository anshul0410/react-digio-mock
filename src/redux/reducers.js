const Reducers = {};

Reducers.currentUser = function currentUser(state=false, action) {
    switch(action.type) {
        case 'CURRENT_USER_INFO':
            return action.data;
        default:
            return state;
    }
}

export default Reducers;