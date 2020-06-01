import React, { useEffect, useState } from 'react';

import useStyles from './styles';

import SliderElement from './SliderElement'
import ItemsCarousel from 'react-items-carousel';
import SlideButton from './SlideButton'

function Slider({ elements }) {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  const classes = useStyles();

  return (
    <ItemsCarousel
    requestToChangeActive={setActiveItemIndex}
    activeItemIndex={activeItemIndex}
    numberOfCards={5}
    gutter={20}
    leftChevron={<SlideButton type={'prev'}/>}
    rightChevron={<SlideButton type={'next'}/>}
    outsideChevron
    chevronWidth={chevronWidth}
    infiniteLoop={true}
      >
      {elements.map(el => (<SliderElement/>))} 
    </ItemsCarousel>
  );
}

export default Slider;