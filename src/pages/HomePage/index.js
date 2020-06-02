import React, { useState, useEffect } from 'react';

import consts from '../../consts';

import api from '../../services/api';
import action from '../../actions'

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import FeatureMovie from '../../components/FeatureMovie';
import Slider from '../../components/Slider';

function HomePage() {
  const [feature, setFeature] = useState({});
  const [popular, setPopular] = useState({});
  const [tendencies, setTendencies] = useState({});
  const [topRated, setTopRated] = useState({});
  const [featureMovieIndex, setFeatureMovieIndex] = useState(null);
  
  const dispatch = useDispatch();
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
      dispatch(action.addGenre(response.data.genres))
    }).catch( err =>{
      console.log(err)
    })
  }, [dispatch]);

  useEffect(() => {
    api.get(consts.POPULAR_URL).then(response => {
      console.log(response.data)
      setPopular(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(consts.TRENDS_URL).then(response => {
      setTendencies(response.data);
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

  useEffect(() => {
    setFeatureMovieIndex(Math.floor((Math.random() * 20)))
  }, []);

  return (
    <>
      <FeatureMovie movie={topRated.results && featureMovieIndex ? topRated.results[featureMovieIndex] : []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Adicionados recentemente</span>
      </div>
      <Slider elements={popular.results || [1,2,3]} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Em alta</span>
      </div>
      <Slider elements={topRated.results || []} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Tendências</span>
      </div>
      <Slider elements={tendencies.results || []} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Populares</span>
      </div>
      <Slider elements={feature.results || []} />
    </>
  );
}

export default HomePage;

