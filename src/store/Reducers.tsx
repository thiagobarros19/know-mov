import { combineReducers } from 'redux'
import movieReducer from './MovieReducer';
import genreReducer from './GenreReducer'

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer
})

export default rootReducer