import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  backgroundShadow: {
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.95)'
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'   
  },
  movieCoverContainer: {
    width: '30%',
    height: '100%',
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieCover: {
    maxWidth: '100%',
    minWidth: 300,
    maxHeight: '80%',
    height: 'auto'
  },
  movieDetail: {
    width: '70%',
    height: '100%',
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
  },
  movieGenre: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    marginTop: 15
  },
  movieRatingContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
    width: '100%'
  },
  movieRating: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    marginRight: 15
  },
  movieRatingCircle: {
    display: 'flex',
    justifyContent: 'left',
  },
  movieSynopsis: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    width: '100%',
    marginTop: 25
  },
  movieSynopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  movieSynopsisDescription: {
    fontSize: 15,
    marginTop: 15
  }

}));

export default styles;