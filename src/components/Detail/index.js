import React from 'react';
import Circle from 'react-circle';

import useStyles from './styles';

import arrow from '../../assets/arrow.png';
import arrowCover from '../../assets/arrowCover.png';


function Detail() {

  const classes = useStyles();

  return (
    <div className={classes.background} style={{backgroundImage: `url(${arrow})`}}>
      <div className={classes.backgroundShadow}>
        <div className={classes.container}>
          <div className={classes.movieCoverContainer}>
            <img src={arrowCover} className={classes.movieCover}/>
          </div>
          <div className={classes.movieDetail}>
            <span className={classes.movieTitle}>Arrow (2012)</span>
            <span className={classes.movieGenre}>Crime, Drama, Mystery, Action, Adventure</span>
            <div className={classes.movieRatingContainer}>
              <span className={classes.movieRating}>User Score</span>
              <Circle 
                className={classes.movieRatingCircle}
                progress={89}
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
            <div className={classes.movieSynopsis}>
              <span className={classes.movieSynopsisTitle}>Overview</span>
              <span className={classes.movieSynopsisDescription}>
                Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;