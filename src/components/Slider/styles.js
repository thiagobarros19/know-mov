import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    paddingLeft: 45,
    '&:hover': {
      '& div': {
        transform: 'translateX(-25%)',
      }
    },
  },
  item: {
    // background: 'green',
    flex: '0 0 15%',
    textAlign: 'center',
    margin: '0 5px',
    height: 150,
    transition: 'transform 250ms ease 350ms',
    '&:hover': {
      // transform: 'scale(1.5) !important',
      '$:div':{
        display: 'flex !important',
      }
    },
    '&:hover ~ &': {
      transform: 'translateX(25%)',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  itemInnerShadow: {
    display: 'none',
    justifyContent: 'left',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0))',
  },
  itemInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    color: '#fff',
    fontSize: 15,
  },
  featureMovieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
  },
  featureMovieGenre: {
    fontSize: 12,
    display: 'flex',
    justifyContent: 'left',
    textAlign: 'left',
    width: '100%',
    marginTop: 5
  },
}));

export default styles;