import React, { useState, useEffect } from 'react';

import consts from '../../../consts';
import { fade,makeStyles } from '@material-ui/core/styles';
import api from '../../../services/api';
import action from '../../../actions'

import useStyles from '../styles';
import {
  withStyles,
} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import FeatureMovie from '../../../components/FeatureMovie';
import Slider from '../../../components/Slider';
import {Button, Typography} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classNames from 'classnames';



const buttonStyles = makeStyles(theme => ({
  button:{ 
    borderRadius:"50px",
    color: 'black',
    backgroundColor:"white",
    fontSize: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    '&:hover':{
      backgroundColor: fade(theme.palette.common.white, 0.8),
      color:fade(theme.palette.common.black, 1)
    }
  },
  buttonDisabled:{
    backgroundColor:"rgb(150,150,150,0.4)",
    color: 'white',
    borderRadius:"50px",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    '&:hover':{
      backgroundColor: fade(theme.palette.common.white, 0.4),
      color:fade(theme.palette.common.white, 1)
      }
  },
}))




function HomePage() {
  const [popular, setPopular] = useState([]);
  const [trends, setTrends] = useState([]);
  const [featureMovieIndex, setFeatureMovieIndex] = useState(0);
  const [time, setTime] = React.useState('day');
  const [type, setType] = React.useState('all');
  const [popularType, setPopularType] = React.useState('movie');
  
  const classesButton = buttonStyles();
  const dispatch = useDispatch();
  const classes = useStyles();
  const {API_URL, TRENDS, API_KEY, GENRE_MOVIE_URL, MOST_POPULAR_URL, DISCOVER} = consts;


  useEffect(() => {
    api.get(GENRE_MOVIE_URL).then(response => {
      dispatch(action.addGenreMovie(response.data.genres))
    }).catch( err =>{
      console.log(err)
    })
  }, [dispatch,GENRE_MOVIE_URL]); 


   useEffect(() => {
   
    api.get(`${DISCOVER}/${popularType}${MOST_POPULAR_URL}`).then(response => {
      setPopular(response.data.results);
    }).catch( err =>{
      console.log(err)
    })
  }, [popularType, DISCOVER, MOST_POPULAR_URL]); 

  useEffect(() => {
   
    api.get(`${API_URL}${TRENDS}/${type}/${time}${API_KEY}`).then(response => {
      setTrends(response.data.results.sort(function() {
        return .5 - Math.random();
      }));
    }).catch( err =>{
      console.log(err)
    })
  }, [time,type,API_URL,TRENDS,API_KEY]);

  useEffect(() => {
    setFeatureMovieIndex(Math.floor((Math.random() * 20)))
  }, []);
  
  const handleChange = (time) => {
    setTime(time);
  };

  const handleType = (type) => {
    setType(type);
  };

  const handlePopularType = (type) => {
    setPopularType(type);
  };

  
  return (
    <>
    
      <FeatureMovie movie={trends.length && featureMovieIndex ? trends[featureMovieIndex] : {}} />
    
      <div className={classes.genreContainer}>
      <Typography className={classes.genreTitle}>Os Mais Populares</Typography>
     
      <div className={classes.buttonG}>
      
      <ButtonGroup fullWidth size="small" className={classes.buttonGroupPopularType}>
          <Button  onClick={()=>handlePopularType('movie')} className={classNames(classesButton.button, {
            [classesButton.buttonDisabled]: popularType !== 'movie',
            })}>Filmes</Button>
          <Button  onClick={()=>handlePopularType('tv')} className={classNames(classesButton.button, {
            [classesButton.buttonDisabled]: popularType !== 'tv',
            })}>Tv Shows</Button>
        </ButtonGroup>
        </div>
      </div>
    
      <Slider elements={popular || []} media_type={popularType} />
      
      <div className={classes.genreContainer}>
        <Typography className={classes.genreTitle}>Tendências</Typography>
        <div className={classes.buttonG}>
          <ButtonGroup fullWidth size="small" className={classes.buttonGroup} style={{marginRight:10}}>
            <Button  onClick={()=>handleChange('day')} className={classNames(classesButton.button, {
              [classesButton.buttonDisabled]: time !== 'day',
              })}>Hoje</Button>
            <Button  onClick={()=>handleChange('week')} className={classNames(classesButton.button, {
              [classesButton.buttonDisabled]: time !== 'week',
              })}>Semana</Button>
          </ButtonGroup>

          <ButtonGroup fullWidth size="small" className={classes.buttonGroup} style={{margin:'10px 0'}} >
            <Button  onClick={()=>handleType('all')} className={classNames(classesButton.button, {
              [classesButton.buttonDisabled]: type !== 'all',
                })}>Todos</Button>
            <Button  onClick={()=>handleType('movie')} className={classNames(classesButton.button, {
              [classesButton.buttonDisabled]: type !== 'movie',
              })}>Filmes</Button>
            <Button  onClick={()=>handleType('tv')} className={classNames(classesButton.button, {
              [classesButton.buttonDisabled]: type !== 'tv',
              })}>Tv</Button>
          </ButtonGroup>
        </div>
      </div>
      <Slider elements={trends || []}/>
      
    </>
  );
}

export default HomePage;

