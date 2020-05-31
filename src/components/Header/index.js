import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import { IconButton, InputBase } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';

import logo from '../../assets/logo.png';
import logoKmWhite from '../../assets/KM White.png';
import logoKm from '../../assets/KM.png';

function Header() {

  const classes = useStyles();
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setOnTop(true);
      }else{
        setOnTop(false);
      }
    };
  })

  return (
    <header 
      className={classNames(classes.navbar, {
        [classes.navbarNone]: onTop,
      })} 
    >
      <div className={classes.leftNavbar}>
        <img src={logoKmWhite} className={classes.logoNavbar} alt="MovieDB" />

        <span className={classes.menuListNavbar}>Início</span>
        <span className={classes.menuListNavbar}>Filmes</span>
        <span className={classes.menuListNavbar}>Séries</span>
        <span className={classes.menuListNavbar}>TV Shows</span>
      </div>

      <div className={classes.rightNavbar}>
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar título..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.filterIcon}>
          <IconButton>
            <ListIcon style={{ color: '#fff', fontSize: 35}} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;