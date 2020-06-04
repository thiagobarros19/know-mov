const INITIAL_STATE = {
    genre_tv:{},
    genre_movie:{}
}

export default  function movieReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_GENRES_TV':
            return { ...state, genre_tv: action.genre}
        case 'ADD_GENRES_MOVIE':
            return { ...state, genre_movie: action.genre}
        default:
            return state;
    }
}