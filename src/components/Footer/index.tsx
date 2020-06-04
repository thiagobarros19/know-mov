import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';

function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <span style={{marginRight:"10px"}} data-testid="footer"><b>Created by:</b> Thiago Silva - 2020</span>
      <a href="https://www.instagram.com/thiagorck/" target="blank" className={classes.instagramIcon}><InstagramIcon /></a>
      <a href="https://github.com/thiagobarros19" target="blank" className={classes.instagramIcon}><GitHubIcon /></a>
    </footer>);
}

export default Footer;