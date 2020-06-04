import  React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import consts from '../../../consts';
import useStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../../actions'
function SliderElement({ element, media_type }) {

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let allGenres = useSelector(state => state.genre.genre_movie)
  const [genres, setGenres] = useState([])


  const {
    id,
    title,
    name,
    release_date,
    first_air_date,
    genre_ids,
    backdrop_path,
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
    navigate(`/detail/${element.media_type || media_type}/${id}`)
  }


  return (

    <span onClick={() => handleClick()} >
      <div className={classes.item} style={{ backgroundImage: `url(${consts.API_IMAGE_URL_SMALL}${backdrop_path})` }}>
        <div className={classes.itemInnerShadow}>
          <div className={classes.itemInfoContainer}>
            <span className={classes.featureMovieTitle}>{title || name} ({new Date(releaseDate || first_air_date).getFullYear()})</span>
            <span className={classes.featureMovieGenre}>{genres.join(', ')}</span> 
          </div>
        </div>
      </div>
    </span> 
  );
}

export default SliderElement;