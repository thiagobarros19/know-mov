import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  featureMovie: {
    //background
    position:"absolute",
    top: 0,
    height: '80%',
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
    background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0))',
  },
  featureMovieDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    padding: 50,
    color: '#fff',
    fontSize: 30,
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
  featureMovieRating: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    marginTop: 15
  },
  featureMovieSynopsis: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    width: '100%'
  },
  featureMovieSynopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  featureMovieSynopsisDescription: {
    fontSize: 15,
    marginTop: 15
  }

}))

export default styles;