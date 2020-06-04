import React, { useEffect, useState } from 'react';
import Circle from 'react-circle';
import consts from '../../consts';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function FeatureMovie(props) {

  let allGenres = useSelector((state: any) => state.genre.genre_movie)
  const desktopSize = useMediaQuery('(min-width:600px)');
  
  const [genres, setGenres] = useState([])
  
  const {
    //  popularity,
    title,
    name,
    release_date,
    first_air_date,
    genre_ids,
    backdrop_path,
    // poster_path,
    //  adult,
    overview,
    vote_average
  } = props.movie;


  useEffect(() => {
    if (allGenres.length && genre_ids) {
      let data = allGenres.filter(genre => {
        return genre_ids.includes(genre.id)
      }).map(genre => genre.name)
      setGenres(data)
    }
  }, [allGenres, genre_ids])

  let releaseDate = release_date ? release_date.substring(0, release_date.indexOf('-')) : null;
  let userScore = vote_average * 10;

  const classes = useStyles();

  return (
    backdrop_path ?
    <div className={classes.featureMovie} style={{ backgroundImage: `url(${consts.API_IMAGE_URL}/${backdrop_path})` }}>
      <div className={classes.featureMovieShadow}>
        <div className={classes.featureMovieDetail}>
          <span className={classes.featureMovieTitle}>{title || name} ({new Date(releaseDate || first_air_date).getFullYear()})</span>
          <span className={classes.featureMovieGenre}>{genres.join(', ')}</span>
          <div className={classes.featureMovieRatingContainer}>
            <span className={classes.featureMovieRating}>Avaliação dos usuários</span>
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
          </div>
          {desktopSize && <div className={classes.featureMovieSynopsis}>
            <span className={classes.featureMovieSynopsisTitle}>Sinópse</span>
            <span className={classes.featureMovieSynopsisDescription}>{overview}</span>
          </div>}
        </div>
      </div>
    </div> : <div className={classes.featureMovie}/>
  );
}

export default FeatureMovie;