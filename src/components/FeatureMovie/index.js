import React, { useEffect, useState } from 'react';
import Circle from 'react-circle';
import consts from '../../consts';

import useStyles from './styles';

function FeatureMovie(props) {

  const [genres, setGenres] = useState([]);

  const { 
    popularity,
    title,
    release_date,
    genre_ids,
    backdrop_path,
    poster_path,
    adult,
    overview,
    vote_average
  } = props.movie;

  useEffect(() => {
    let data = [];
    if(props.genre && genre_ids){
      data = props.genre.filter( genre => {
        return genre_ids.includes(genre.id);
      });
    }
    
    setGenres(data);
  }, [props.genre, genre_ids])

  let releaseDate = release_date ? release_date.substring(0, release_date.indexOf('-')) : '';
  let userScore = vote_average * 10;

  const classes = useStyles();

  return (
    <div className={classes.featureMovie} style={{backgroundImage: `url(${consts.API_IMAGE_URL}${backdrop_path})`}}>
      <div className={classes.featureMovieShadow}>
        <div className={classes.featureMovieDetail}>
          <span className={classes.featureMovieTitle}>{title} ({releaseDate})</span>
          <span className={classes.featureMovieGenre}>{genres.map(genres => genres.name).join(', ')}</span>
          <div className={classes.featureMovieRatingContainer}>
            <span className={classes.featureMovieRating}>Avaliação dos usuários</span>
            <Circle 
              className={classes.featureMovieRatingCircle}
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
          </div>
          <div className={classes.featureMovieSynopsis}>
            <span className={classes.featureMovieSynopsisTitle}>Sinópse</span>
            <span className={classes.featureMovieSynopsisDescription}>{overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureMovie;