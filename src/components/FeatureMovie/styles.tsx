import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  featureMovie: {
    height: '70vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  featureMovieShadow: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0))',
  },
  featureMovieDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
    color: '#fff',
    fontSize: 30,
    maxWidth:1000,
    maxHeight:450
  },
  featureMovieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    marginTop: 15
  },
  featureMovieGenre: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    marginTop: 15
  },
  featureMovieRatingContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    width: '100%'
  },
  featureMovieRating: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    marginRight: 15
  },
  featureMovieRatingCircle: {
    display: 'flex',
    justifyContent: 'left',
  },
  featureMovieSynopsis: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    width: '100%',
  },
  featureMovieSynopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  featureMovieSynopsisDescription: {
    fontSize: 15,
    marginTop: 15
  },
  video: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
  }

}))

export default styles;