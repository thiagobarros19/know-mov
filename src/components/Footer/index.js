import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';

import useStyles from './styles';

function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <span><b>Created by:</b> Thiago Silva - 2020</span>
      <a href="https://www.instagram.com/thiagorck/" target="blank" className={classes.instagramIcon}><InstagramIcon /></a>
    </footer>);
}

export default Footer;