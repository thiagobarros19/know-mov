import  React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import consts from '../../../consts';
import useStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../../actions'
function SliderElement({ element }) {

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allGenres = useSelector(state => state.genre.genre)
  const [genres, setGenres] = useState([])

  const {
    id,
    title,
    release_date,
    genre_ids,
    backdrop_path,
    //poster_path,
  } = element;

  let releaseDate = release_date ? release_date.substring(0, release_date.indexOf('-')) : '';



  useEffect(() => {
    if(allGenres.length && genre_ids){
      let data = allGenres.filter(genre => {
        return genre_ids.includes(genre.id)
      }).map(genre => genre.name)
      setGenres(data)
    }
  },[allGenres, genre_ids])


  const handleClick = () => {
    dispatch(action.addMovie(element))
    navigate(`/detail/${id}`)
  }


  return (

    <span onClick={() => handleClick()} >
      <div className={classes.item} style={{ backgroundImage: `url(${consts.API_IMAGE_URL}${backdrop_path})` }}>
        <div className={classes.itemInnerShadow}>
          <div className={classes.itemInfoContainer}>
            <span className={classes.featureMovieTitle}>{title} ({releaseDate})</span>
            <span className={classes.featureMovieGenre}>{genres.join(', ')}</span> 
          </div>
        </div>
      </div>
    </span> 
  );
}

export default SliderElement;