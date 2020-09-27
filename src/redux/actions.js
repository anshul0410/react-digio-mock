export const updateCurrentState = (data) => {
    return dispatch => {
        dispatch({type: 'CURRENT_STATE_INFO', data: data})
    }
}