const addMovie = (data) =>{
    return {
         type: 'ADD_MOVIE', movie: data 
    }
}

const addGenreTv = (data) =>{
    return {
         type: 'ADD_GENRES_TV', genre: data 
    }
}

const addGenreMovie = (data) =>{
    return {
         type: 'ADD_GENRES_MOVIE', genre: data 
    }
}

export default {addMovie, addGenreTv, addGenreMovie};