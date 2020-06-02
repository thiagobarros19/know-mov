const addMovie = (data) =>{
    return {
         type: 'ADD_MOVIE', movie: data 
    }
}

const addGenre = (data) =>{
    return {
         type: 'ADD_GENRES', genre: data 
    }
}

export default {addMovie, addGenre};