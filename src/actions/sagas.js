import {put, takeLatest, all} from 'redux-saga/effects'

const addMovie = function* (data){
    yield put({ type: 'ADD_MOVIE', movie: data });
}

function* addMovieWatcher(data){
    yield takeLatest("ADD_MOVIE", addMovie(data));
}

const addGenre = function* (data){
    yield put({ type: 'ADD_GENRES', genre: data });
}

function* addGenreWatcher(data){
    yield takeLatest("ADD_GENRES", addGenre(data));
}

export default function* rootSaga(){
    yield all([addMovieWatcher, addGenreWatcher]);
}