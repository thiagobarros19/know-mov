
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    minWidth: 200,
    backgroundColor: fade(theme.palette.common.black, 0),
   // marginTop:50,
  },
  listItem:{
    '&:hover':{
        backgroundColor: fade(theme.palette.common.black, 0.9),
        color:fade(theme.palette.common.white, 1)
        }
  },
  item:{
      fontSize:20,
      color:"#FFF",
      textDecoration:"none"
  },
  fullList: {
    width: 'auto',
  },
  drawer:{
      '& > div':{
        background:fade(theme.palette.common.black, 0.6),
        color:fade(theme.palette.common.white, 0.8)
      }
  }
}));

export default function MyDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[{name:'Inicio', route:'/'}, {name:'Filmes',route:'/movies'}, {name:'Tv Shows',route:'/tvshows'}].map(({name,route}, index) => (
          <ListItem className={classes.listItem} button key={name}>
            <Link to={route} className={classes.item}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (

     
    <div key={'left'} className={classes.root}>
        
        <IconButton onClick={toggleDrawer('left', true)}>
            <ReorderIcon style={{ color: '#fff', fontSize: 35 }} />   
        </IconButton>
        <Drawer
            className={classes.drawer}
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            >
        {list('left')}
        </Drawer>
    </div>

  );
}