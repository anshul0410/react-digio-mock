const Reducers = {};

Reducers.currentState = function currentState(state='login', action) {
    switch(action.type) {
        case 'CURRENT_STATE_INFO':
            return action.data;
        default:
            return state;
    }
}

Reducers.signingStatus = function signingStatus(state=false, action) {
    switch(action.type) {
        case 'UPDATE_USER_SIGN':
            return action.data;
        default:
            return state;
    }
}

export default Reducers;