import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { IconButton} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom';
import useStyles from './styles';


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
      <List  >
        {[{name:'Inicio', route:'/'}, {name:'Filmes',route:'/movies'}, {name:'Tv Shows',route:'/tvshows'}].map(({name,route}, index) => (
          <ListItem className={classes.listItem} button key={name}>
            <Link to={route} className={classes.item}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (

     
    <div key={'left'}  data-testid="drawer">
        
        <IconButton onClick={toggleDrawer(true)}>
            <ReorderIcon style={{ color: '#fff', fontSize: 35 }} />   
        </IconButton>
        <Drawer
       
            className={classes.drawer}
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            >
        {list()}
        </Drawer>
    </div>

  );
}