import React from 'react';

import useStyles from '../styles';
import Img from '../../../assets/arrow.png';

function SliderElement(){

  const classes = useStyles();

 return (
    <div className={classes.item} style={{backgroundImage: `url(${Img})`}}>
      <div className={classes.itemInnerShadow}>
        <div className={classes.itemInfoContainer}>
          <span className={classes.featureMovieTitle}>Arrow (2012)</span>
          <span className={classes.featureMovieGenre}>Crime, Drama, Mystery, Action, Adventure</span>
        </div>
      </div>
    </div>
 );
}

export default SliderElement;