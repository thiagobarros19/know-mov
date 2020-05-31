import React from 'react';

import useStyles from './styles';

import SliderElement from './SliderElement'

function Slider(){

  const classes = useStyles();

 return (
   <div className={classes.container}>
     <SliderElement />
     <SliderElement />
     <SliderElement />
     <SliderElement />
     <SliderElement />
     <SliderElement />
   </div>
 );
}

export default Slider;