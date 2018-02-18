const user = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
        return Object.assign({}, state, {
            data: action.user,
          })
        default:
            return state;
    }
}

export default user;