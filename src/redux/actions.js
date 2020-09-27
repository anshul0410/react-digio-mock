export const updateCurrentState = (data) => {
    return dispatch => {
        dispatch({type: 'CURRENT_STATE_INFO', data: data})
    }
}
export const updateUserSign = (data) => {
    return dispatch => {
        dispatch({type: 'UPDATE_USER_SIGN', data: data})
    }
}
