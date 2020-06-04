import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, InputBase, Box, Typography, Badge} from '@material-ui/core';
import classNames from 'classnames';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Drawer from '../Drawer'
import useStyles from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import consts from '../../consts';
import action from '../../actions'
import Tooltip from 'react-power-tooltip'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Header() {

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const desktopSize = useMediaQuery('(min-width:800px)');

  const [onTop, setOnTop] = useState(true);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [trending, setTrending] = useState([]);
  const [badge, setBadge] = useState(20);

  const [show, setShow] = React.useState(false);

  const {TRENDS_DAY_URL, API_IMAGE_URL} = consts


  const showTooltip = (bool: boolean) => {
   setShow(bool)
  }


  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };
  })

  useEffect(() => {
    api.get(TRENDS_DAY_URL).then(response => {
      setTrending(response.data.results)
    }).catch( err =>{
      console.log(err)
    })
  }, [TRENDS_DAY_URL]);


  const search = (newInputValue: string) => {
    if (newInputValue !== '') {
      api.get(consts.SEARCH_MOVIE, {
        params: {
          query: newInputValue,
          page: 1,
          include_adult: false
        }
      }).then(response => {

        const moviesName = response.data.results.map((value: any) => value.name || value.original_title || value.original_name)
        setOptions(moviesName.slice(0, 10))
        setMovies(response.data.results.slice(0, 10))

      }).catch(err => {
        console.log(err)
      })

    } else {
      setOptions([])
    }

    setInputValue(newInputValue);
  }

  const handleMovie = (movieName: string) => {
    let element: any = movies.find((movie: any) => movie.name === movieName || movie.original_title === movieName || movie.original_name === movieName)
    if (element) {
      dispatch(action.addMovie(element))
      navigate(`/detail/${element.media_type}/${element.id}`)
    }
    setValue(movieName);
  }

  const handleClick = (movie: any) => {
    dispatch(action.addMovie(movie))
    navigate(`/detail/${movie.media_type}/${movie.id}`)
  }

  const removeBadge = () => {
    setBadge(0)
  }

  return (
    <header
      className={classNames(classes.navbar, {
        [classes.navbarNone]: onTop,
        [classes.navbarMobile]: !desktopSize,
      })}
    >
      {!desktopSize &&   <Drawer/>}
      <div className={classes.leftNavbar}>
        <Link to="/"><img src={logo} className={classes.logoNavbar} alt="MovieDB" /></Link>
        {desktopSize &&  <div>
          <Link to="/" className={classes.menuListNavbar}>Início</Link>
          <Link to="/movies" className={classes.menuListNavbar}>Filmes</Link>
          <Link to="/tvshows" className={classes.menuListNavbar}>TV Shows</Link>
        </div>}
      </div>
      <div className={classes.rightNavbar}>
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              handleMovie(newValue || '')
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              search(newInputValue);
            }}
            noOptionsText='Nenhuma Resultado Encontrado'
            limitTags={1}
            id="controllable-states-demo"
            options={options}
            classes={{
              paper: classes.autocompletePaper,
              listbox: classes.autocompleteListbox
            }}
            disableListWrap
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderInput={(params) => <InputBase
              placeholder="Buscar título..."
              {...params}
              ref={options.length ? params.InputProps.ref : null}
              classes={{
                input: desktopSize ? classes.inputInput : classes.inputMobile,
              }}
             
            />}


          />

        </div>
        {desktopSize && <div className={classes.filterIcon}>
          <div 
              className={classes.list}
              style={{ position: 'relative' }}
              onMouseOver={() => showTooltip(true)} 
              onMouseLeave={() => showTooltip(false)}
              >
                <IconButton >
                    <Badge badgeContent={badge} color="error" onMouseLeave={() => removeBadge()}>
                          <WhatshotIcon style={{ color: '#fff', fontSize: 35 }} />   
                    </Badge>
                    </IconButton>
                    <Tooltip 
                      show={show}
                      arrowAlign="end"
                      position="bottom center"
                      textBoxWidth="400px"
                      hoverBackground="rgba(25,25,25,0.5)"
                      backgroundColor="rgba(0,0,0,0.5)"
                      hoverColor="#FFF"
                      color="#FFF"
                      lineSeparated='1px solid #505050'
                    >
                    {trending.map((movie: any) => {
                        return (
                          <Box key={movie.id} className={classes.boxImage} onClick={() => handleClick(movie)} >
                              <img  alt="" src={`${API_IMAGE_URL}${movie.backdrop_path}`} className={classes.logoNavbar}/>
                              <Box className={classes.boxDescription}>
                              <Typography className={classes.movieTitle}>{movie.title}</Typography>
                              <Typography className={classes.movieGenre}>{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</Typography>
                              </Box>
                          </Box> 
                            );
                      })}
                      
                      
                    </Tooltip>
            </div>
            </div>}
      </div>
    </header>
  );
}

export default Header;

