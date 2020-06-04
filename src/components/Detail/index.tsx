import React, { useEffect,useState } from 'react';
import consts from '../../consts';
import Circle from 'react-circle';
import { useSelector} from 'react-redux';
import api from '../../services/api';
import ImageNotFound from '../../assets/notfound.png'
import useStyles from './styles';
import Season from '../Season'
import {Typography} from '@material-ui/core'
import classNames from 'classnames';

function Detail({ movieId, media_type }) {

  const classes = useStyles();

  const [movie, setMovie] = useState(useSelector((state: any) => state.movie.movie));
  const id = movieId;

  const  {API_KEY,API_LANGUAGE} = consts

  console.log(movieId,media_type)

  useEffect(() => {
      api.get(`/${media_type}/${id}${API_KEY}${API_LANGUAGE}`).then(response => {
        setMovie(response.data);
      }).catch( err =>{
        console.log(err)
      }) 
  }, [id,media_type,API_KEY,API_LANGUAGE]);

  let releaseDate = movie.release_date ? movie.release_date.substring(0, movie.release_date.indexOf('-')) : '';
  let userScore = movie.vote_average * 10;

  return (
    <div className={classes.root}>
    <div className={classNames(classes.backgroundMovie, {
      [classes.backgroundTv]: media_type === 'tv',
    })}
    style={{backgroundImage: `url(${consts.API_IMAGE_URL}${movie.backdrop_path})`}}>

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
            <span className={classes.movieGenre}>{movie.genres ? movie.genres.map(m => m.name).join(', ') : ''}</span>
            {movie.vote_average !== 0 && 
              <div className={classes.movieRatingContainer}>
                <span className={classes.movieRating}>Avaliação dos usuários</span>
                <Circle 
                  progress={userScore || 0}
                  animate={true}
                  size={'50px'}
                  lineWidth={'35px'}
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
    {movie.seasons && <Typography className={classes.seasonTitle}>Temporadas</Typography>}
 
    {media_type === 'tv' && <Season seasons={movie.seasons || []}/>}
    </div>
  );
}

export default Detail;