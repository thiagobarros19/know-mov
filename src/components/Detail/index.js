import React, { useEffect,useState } from 'react';
import consts from '../../consts';
import Circle from 'react-circle';
import { useSelector} from 'react-redux';
import api from '../../services/api';
import ImageNotFound from '../../assets/notfound.png'
import useStyles from './styles';

function Detail({ movieId }) {

  const classes = useStyles();

  const [movie, setMovie] = useState(useSelector(state => state.movie.movie));
  const [genres, setGenres] = useState([]);

  const id = movieId;

  useEffect(() => {
    
    api.get(consts.GENRE_URL).then(response => {
      setGenres(response.data.genres)
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  

  const getGenres = () =>{
    return genres.filter(genre => {
      return movie.genres ? movie.genres.map(genreMovie => genreMovie.id).includes(genre.id) : null
    }).map(genre => genre.name)
  }


  useEffect(() => {
    console.log(!Object.keys(movie).length)
    
      api.get(`/movie/${id}${consts.GET_MOVIE_ID}`).then(response => {
        setMovie(response.data);
      }).catch( err =>{
        console.log(err)
      }) 
  }, [id]);

  let releaseDate = movie.release_date ? movie.release_date.substring(0, movie.release_date.indexOf('-')) : '';
  let userScore = movie.vote_average * 10;

  return (
    
    <div className={classes.background} style={{backgroundImage: `url(${consts.API_IMAGE_URL}${movie.backdrop_path})`}}>

      <div className={classes.backgroundShadow}>
        <div className={classes.container}>
          <div className={classes.movieCoverContainer}>
            <a href={movie.homepage} target="blank">
              {movie.backdrop_path ? <img  alt="" src={`${consts.API_IMAGE_URL}${movie.poster_path}`} className={classes.movieCover}/>:
                                      <img  alt=""  src={ImageNotFound} className={classes.movieCover}/>}
            </a>
          </div>
          <div className={classes.movieDetail}>
            <span className={classes.movieTitle}>{movie.title} {releaseDate ? `(${releaseDate})` : ''}</span>
            <span className={classes.movieGenre}>{getGenres().join(', ')}</span>
            {movie.vote_average !== 0 && 
              <div className={classes.movieRatingContainer}>
                <span className={classes.movieRating}>Avaliação dos usuários</span>
                <Circle 
                  className={classes.movieRatingCircle}
                  progress={userScore}
                  animate={true}
                  size={50}
                  lineWidth={35}
                  progressColor={'#008080'}
                  bgColor={'#fff'}
                  textColor={'#fff'}
                  textStyle={{ 
                    font: 'bold 6rem Roboto, sans-serif' // CSSProperties: Custom styling for percentage.
                  }}
                />
            </div>}
            {movie.overview &&
              <div className={classes.movieSynopsis}>
                <span className={classes.movieSynopsisTitle}>Sinópse</span>
                <span className={classes.movieSynopsisDescription}>
                  {movie.overview}
                </span>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;