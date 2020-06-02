import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    slideButton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '55px',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      border: 0,
      outline: 0,
      padding: 0,
      transition: 'transform 350ms',
      '& span': {
        width: '25px',
        color: '#fff',
        display: 'block',
        margin: '0 auto',
      },
      '&:hover':{
        '& span': {
          transform: 'scale(1.5)'
        }
      }
    },
    next: {
        right: 0,
      },
    prev: {
        left: 0,
      },
}));

export default styles;
