import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  backgroundMovie: {
    width:"100%",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  backgroundTv: {
    width:"100%",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  backgroundShadow: {
    background: 'rgba(0,0,0,0.95)',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    flexWrap:'wrap',
    padding:'125px 50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding:'100px 20px 20px 20px',
    },
  },
  movieCoverContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  movieCover: {
    height:"40vw",
    minHeight: 500,
    maxHeight:650
  },
  movieDetail: {
    padding:"20px 20px",
    maxWidth: 800 ,
    width:'40vw',
    minWidth: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#fff',
  },
  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
  },
  movieGenre: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'left',
    width: '50%',
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
  },
  seasonTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    margin:"10px"
  }

}));

export default styles;