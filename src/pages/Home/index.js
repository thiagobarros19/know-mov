import React from 'react';

import useStyles from './styles';

import Header from '../../components/Header';
import FeatureMovie from '../../components/FeatureMovie';

function Home() {

  const classes = useStyles();

  return (
    <>
      <Header />
      <FeatureMovie />
    </>
  );
}

export default Home;