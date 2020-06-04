import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';
import classNames from 'classnames';

function SlideButton ({ onClick, type }: SlideProps) {

  const classes = useStyles();
  return (
    <button
      className={classNames(classes.slideButton, {
        [classes.next]: type==='next',
        [classes.prev]: type==='prev',
      })} 
      onClick={(onClick)}>
      <span>
        {type==='next' && <ArrowForwardIosIcon/>}
        {type==='prev' && <ArrowBackIosIcon/>}
      </span>
    </button>
  );

}
export default SlideButton;

export interface SlideProps {
  onClick?: (event: React.MouseEvent<any>) => void,
  type: string;
}