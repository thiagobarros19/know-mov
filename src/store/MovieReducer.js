
const INITIAL_STATE = {
    movie:{},
}

export default  function movieReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_MOVIE':
            return { ...state, movie: action.movie}
        default:
            return state;
    }
}
