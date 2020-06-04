import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SliderElement from './SliderElement'
import ItemsCarousel from 'react-items-carousel';
import SlideButton from './SlideButton'
import Box from '@material-ui/core/Box';
import useWindowDimensions from '../../config/useWindowDimensions'

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



function Slider({ elements, media_type }) {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0  ;
  const { width } = useWindowDimensions();
 
  return (
    <Wrapper>
      <ItemsCarousel 
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={Math.ceil(width/375)}
          gutter={10}
          leftChevron={<SlideButton type={'prev'}/>}
          rightChevron={<SlideButton type={'next'}/>}
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop={true}
        >
        {elements.map(el => el.backdrop_path ? (<SliderElement key={el.id} element={el} media_type={media_type || el.media_type} />): null)} 
      </ItemsCarousel>
    </Wrapper>
  );
}

export default Slider;