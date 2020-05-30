import React from 'react';

import useStyles from './styles';

import Img from '../../assets/arrow.png';

function FeatureMovie() {

  const classes = useStyles();

  return (
    <div className={classes.featureMovie} style={{backgroundImage: `url(${Img})`}}>
      <div className={classes.featureMovieShadow}>
        <div className={classes.featureMovieDetail}>
          <span className={classes.featureMovieTitle}>Arrow (2012)</span>
          <span className={classes.featureMovieGenre}>Crime, Drama, Mystery, Action, Adventure</span>
          <span className={classes.featureMovieRating}>User Score</span>
          <span className={classes.featureMovieSynopsis}>
            <span className={classes.featureMovieSynopsisTitle}>Overview</span>
            <span className={classes.featureMovieSynopsisDescription}>
              Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeatureMovie;