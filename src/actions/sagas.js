import {put, takeLatest, all} from 'redux-saga/effects'

const addMovie = function* (data){
    yield put({ type: 'ADD_MOVIE', movie: data });
}

function* addMovieWatcher(data){
    yield takeLatest("ADD_MOVIE", addMovie(data));
}

const addGenreTv = function* (data){
    yield put({ type: 'ADD_GENRES_TV', genre: data });
}

function* addGenreWatcherTv(data){
    yield takeLatest("ADD_GENRES_TV", addGenreTv(data));
}


const addGenreMovie = function* (data){
    yield put({ type: 'ADD_GENRES_MOVIE', genre: data });
}

function* addGenreWatcherMovie(data){
    yield takeLatest("ADD_GENRES_MOVIE", addGenreMovie(data));
}

export default function* rootSaga(){
    yield all([addMovieWatcher, addGenreWatcherTv, addGenreWatcherMovie]);
}