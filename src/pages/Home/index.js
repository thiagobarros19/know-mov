import React from 'react';

import useStyles from './styles';

import Header from '../../components/Header';
import FeatureMovie from '../../components/FeatureMovie';
import Slider from '../../components/Slider';

function Home() {

  const classes = useStyles();

  return (
    <>
      <Header />
      <FeatureMovie />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Adicionados recentemente</span>
      </div>
      <Slider />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Em alta</span>
      </div>
      <Slider />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Lançamentos</span>
      </div>
      <Slider />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Originais</span>
      </div>
      <Slider />
    </>
  );
}

export default Home;