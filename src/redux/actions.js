const updateCurrentUser = () => {
    return dispatch => {
        let data = {name: 'anshul'}
        dispatch({type: 'CURRENT_USER_INFO', data: data})
    }
}