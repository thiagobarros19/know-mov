import React, { useState, useEffect } from 'react';

import consts from '../../../consts';

import api from '../../../services/api';
import action from '../../../actions'

import useStyles from '../styles';
import { useDispatch } from 'react-redux';

import FeatureMovie from '../../../components/FeatureMovie';
import Slider from '../../../components/Slider';

function TvShows() {
  const [onTheAir, setOnTheAir] = useState({});
  const [popular, setPopular] = useState({});
  const [today, setToday] = useState({});
  const [topRated, setTopRated] = useState({});
  const [featureMovieIndex, setFeatureMovieIndex] = useState(null);
  
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    TV_URL,
    ON_THE_AIR_URL,
    GENRE_MOVIE_URL,
    POPULAR_URL,
    TV_AIRING_TODAY_URL,
    TOP_RATED_URL
  }  = consts

  // Feature
  useEffect(() => {
    api.get(`${TV_URL}${ON_THE_AIR_URL}`).then(response => {
      setOnTheAir(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [TV_URL, ON_THE_AIR_URL]);

  //Genres
  useEffect(() => {
    api.get(GENRE_MOVIE_URL).then(response => {
      dispatch(action.addGenreMovie(response.data.genres))
    }).catch( err =>{
      console.log(err)
    })
  }, [dispatch, GENRE_MOVIE_URL]);

  //Popular
  useEffect(() => {
    api.get(`${TV_URL}${POPULAR_URL}`).then(response => {
      setPopular(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [TV_URL, POPULAR_URL]);

  //Tendencies
  useEffect(() => {
    api.get(`${TV_URL}${TV_AIRING_TODAY_URL}`).then(response => {
      setToday(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [TV_URL, TV_AIRING_TODAY_URL]);

  //Top rade
  useEffect(() => {
    api.get(`${TV_URL}${TOP_RATED_URL}`).then(response => {
      setTopRated(response.data);
    }).catch( err =>{
      console.log(err)
    })
  }, [TV_URL, TOP_RATED_URL]);

  //Feature movie index
  useEffect(() => {
    setFeatureMovieIndex(Math.floor((Math.random() * 20)))
  }, []);


  return (
    <>
      <FeatureMovie movie={popular.results && featureMovieIndex ? popular.results[featureMovieIndex] : []} />

      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>No ar</span>
      </div>
      <Slider elements={onTheAir.results || []} media_type={"tv"}/>
      
      <div className={classes.genreContainer} >
        <span className={classes.genreTitle}>Em alta</span>
      </div>
      <Slider elements={topRated.results || []} media_type={"tv"}/>
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Hoje</span>
      </div>
      <Slider elements={today.results || []} media_type={"tv"}/>
      
      <div className={classes.genreContainer}>
        <span className={classes.genreTitle}>Populares</span>
      </div>
      <Slider elements={popular.results || []} media_type={"tv"}/>
    </>
  );
}

export default TvShows;

