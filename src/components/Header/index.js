import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import { IconButton, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox} from '@material-ui/core';
import classNames from 'classnames';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
// import logo from '../../assets/logo.png';
import logoKmWhite from '../../assets/KM White.png';
// import logoKm from '../../assets/KM.png';
import api from '../../services/api';
import consts from '../../consts';
import action from '../../actions'
import 'rc-menu/assets/index.css';
import Tooltip from 'react-power-tooltip'

function Header() {

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [onTop, setOnTop] = useState(true);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [movies, setMovies] = React.useState({});
  const [genres, setGenres] = useState([]);

  const [checked, setChecked] = React.useState([1]);

  const [show, setShow] = React.useState(false);

  const showTooltip = bool => {
   setShow(bool)
  }

  const handleGender= (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
    
    api.get(consts.GENRE_URL).then(response => {
      setGenres(response.data.genres)
    }).catch( err =>{
      console.log(err)
    })
  }, []);


  const search = (newInputValue) => {
    if (newInputValue !== '') {
      api.get(consts.SEARCH_MOVIE, {
        params: {
          query: newInputValue,
          page: 1,
          include_adult: false
        }
      }).then(response => {

        const moviesName = response.data.results.map(value => value.name || value.original_title || value.original_name)
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

  const handleMovie = (movieName) => {
    let element = movies.find(movie => movie.name === movieName || movie.original_title === movieName || movie.original_name === movieName)
    if (element) {
      dispatch(action.addMovie(element))
      navigate(`/detail/${element.id}`)
    }
    setValue(movieName);
  }



  return (
    <header
      className={classNames(classes.navbar, {
        [classes.navbarNone]: onTop,
      })}
    >
      <div className={classes.leftNavbar}>
        <Link to="/"><img src={logoKmWhite} className={classes.logoNavbar} alt="MovieDB" /></Link>

        <Link to="/" className={classes.menuListNavbar}>Início</Link>
        <span className={classes.menuListNavbar}>Filmes</span>
        <span className={classes.menuListNavbar}>Séries</span>
        <span className={classes.menuListNavbar}>TV Shows</span>
      </div>

    
      

      <div className={classes.rightNavbar}>
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

      

          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              handleMovie(newValue)
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              search(newInputValue);
            }}
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
                input: classes.inputInput,
              }}
            />}


          />

        </div>

        <div className={classes.filterIcon}>

        <div 
        style={{ position: 'relative' }}
        onMouseOver={() => showTooltip(true)} 
        onMouseLeave={() => showTooltip(false)}
        className={classes.listCategory}
        >
          <IconButton >
                  <ListIcon style={{ color: '#fff', fontSize: 35 }} />
                </IconButton>
                
                <Tooltip 
                  
                  show={show}
                  arrowAlign="end"
                  position="bottom center"
                  lineSeparated
                  className={classes.tooltip}
                  textBoxWidth={'225px'}
                  hoverBackground="none"
                  backgroundColor="rgba(0,0,0,0.5)"
                  hoverColor="#FFF"
                  color="#FFF"
                >
                  
                    <List className={classes.root}>
                      {genres.map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value.name}`;
                        return (
                          <ListItem onClick={handleGender(value.id)} dense className={classes.listItem} key={value.id} >
                            <ListItemText id={labelId} primary={value.name} />
                            <ListItemSecondaryAction>
                              <Checkbox
                                
                                onChange={handleGender(value.id)}
                                checked={checked.indexOf(value.id) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                                style={{ color: "white", alignSelf:'center' }}
                                className={classes.checkBox}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        );
                      })}
                    </List>
                  
                </Tooltip>

        </div>


        </div>


      </div>
    </header>
  );
}

export default Header;

