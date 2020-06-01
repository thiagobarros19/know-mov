import React, { useEffect, useState } from 'react';

import consts from '../../consts';

import api from '../../services/api';

import useStyles from './styles';

import Header from '../../components/Header';
import FeatureMovie from '../../components/FeatureMovie';
import Slider from '../../components/Slider';


function Home() {
  const [feature, setFeature] = useState({});
  const [genre, setGenre] = useState({});
  const [popular, setPopular] = useState({});
  const [latest, setLatest] = useState({});
  const [topRated, setTopRated] = useState({});

  const classes = useStyles();


  useEffect(() => {
    api.get(consts.FEATURE_URL).then(response => {
      setFeature(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(consts.GENRE_URL).then(response => {
      setGenre(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(consts.POPULAR_URL).then(response => {
      setPopular(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(consts.LATEST_URL).then(response => {
      setLatest(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(consts.TOP_RATED_URL).then(response => {
      setTopRated(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);



  return (
    <>
      <Header />
      <FeatureMovie movie={topRated.results ? topRated.results[0] : []} genre={genre.genres ? genre.genres : []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Adicionados recentemente</span>
      </div>
      <Slider elements={popular.results || [1,2,3]} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Em alta</span>
      </div>
      <Slider elements={popular.results || []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Lançamentos</span>
      </div>
      <Slider elements={popular.results || []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Originais</span>
      </div>
      <Slider elements={popular.results || []} />
    </>
  );
}

export default Home;