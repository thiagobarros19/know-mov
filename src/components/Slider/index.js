import React, { useState } from 'react';

//import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import SliderElement from './SliderElement'
import ItemsCarousel from 'react-items-carousel';
import SlideButton from './SlideButton'
import Box from '@material-ui/core/Box';


const Wrapper = withStyles({
  root:{
    padding: '0 0px',

    '& > div': {
     /*  display: 'contents', */
      //margin: '0 45px',
     /*  '&:hover': {
        '& div': {
          transform: 'translateX(0%)',
        }
      }, */
    } 
}
})(Box);

function Slider({ elements }) {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0  ;
 // const classes = useStyles();

  return (
    <Wrapper>
      <ItemsCarousel 
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={10}
          leftChevron={<SlideButton type={'prev'}/>}
          rightChevron={<SlideButton type={'next'}/>}
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop={true}
        >
        {elements.map(el => el.backdrop_path ? (<SliderElement key={el.id} element={el} />): null)} 
      </ItemsCarousel>
    </Wrapper>
  );
}

export default Slider;