import React from 'react';

import useStyles from './styles';

import Header from '../../components/Header';
import Detail from '../../components/Detail';

function MovieDetail() {

  const classes = useStyles();

  return (
    <>
      <Header />
      <Detail />
    </>
  );
}

export default MovieDetail;