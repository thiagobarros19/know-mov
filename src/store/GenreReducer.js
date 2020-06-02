const INITIAL_STATE = {
    genre:{},
}

export default  function movieReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_GENRES':
            return { ...state, genre: action.genre}
        default:
            return state;
    }
}