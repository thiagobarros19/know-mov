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
    transition: 'transform 250ms ease 150ms',
    '&:hover': {
      //transform: 'scale(1.5) !important',
      '& div':{
        opacity: '1 !important',
        cursor: 'pointer'
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
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0))',
    opacity: 0,
    transition: 'opacity 250ms ease 10ms',
  },
  itemInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    color: '#fff',
    fontSize: 15,
    textDecoration: 'none'
  },
  featureMovieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    textDecoration: 'none'
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