import React, { useState, useEffect } from 'react';

import consts from '../../../consts';

import api from '../../../services/api';
import action from '../../../actions'

import useStyles from '../styles';
import { useDispatch } from 'react-redux';

import FeatureMovie from '../../../components/FeatureMovie';
import Slider from '../../../components/Slider';


function Movies() {
  const [feature, setFeature] = useState({});
  const [popular, setPopular] = useState({});
  const [tendencies, setTendencies] = useState({});
  const [topRated, setTopRated] = useState({});
  const [featureMovieIndex, setFeatureMovieIndex] = useState(null);
  
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    MOVIE_URL,
    FEATURE_URL,
    GENRE_MOVIE_URL,
    POPULAR_URL,
    NOW_PLAYING_URL,
    TOP_RATED_URL
  }  = consts

  useEffect(() => {
    api.get(`${MOVIE_URL}${FEATURE_URL}`).then(response => {
      setFeature(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [MOVIE_URL, FEATURE_URL]);

  useEffect(() => {
    api.get(GENRE_MOVIE_URL).then(response => {
      dispatch(action.addGenreMovie(response.data.genres))
    }).catch( err =>{
      console.log(err)
    })
  }, [dispatch, GENRE_MOVIE_URL]);

  useEffect(() => {
    api.get(`${MOVIE_URL}${POPULAR_URL}`).then(response => {
      setPopular(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [MOVIE_URL, POPULAR_URL]);

  useEffect(() => {
    api.get(`${MOVIE_URL}${NOW_PLAYING_URL}`).then(response => {
      setTendencies(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [MOVIE_URL, NOW_PLAYING_URL]);

  useEffect(() => {
    api.get(`${MOVIE_URL}${TOP_RATED_URL}`).then(response => {
      setTopRated(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [MOVIE_URL, TOP_RATED_URL]);

  useEffect(() => {
    setFeatureMovieIndex(Math.floor((Math.random() * 20)))
  }, []);

  return (
    <>
      <FeatureMovie movie={topRated.results && featureMovieIndex ? topRated.results[featureMovieIndex] : []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Adicionados recentemente</span>
      </div>
      <Slider elements={popular.results || []}  media_type={"movie"} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Em alta</span>
      </div>
      <Slider elements={topRated.results || []} media_type={"movie"} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Ao vivo</span>
      </div>
      <Slider elements={tendencies.results || []} media_type={"movie"} />
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Populares</span>
      </div>
      <Slider elements={feature.results || []} media_type={"movie"}/>
    </>
  );
}

export default Movies;

