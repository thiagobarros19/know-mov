import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  navbar: {
    position: 'fixed',
    background: 'rgba(33,34,44,1)',
    transition: 'background 300ms',
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    zIndex: 1,
  },
  navbarNone:{
    background: 'linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0))',
    transition: 'background 550ms',
  },
  leftNavbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightNavbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoNavbar: {
    width: 90
  },
  menuListNavbar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: fade(theme.palette.common.white, 0.7),
    },
  },
  searchBar: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '500px',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
  filterIcon: {
    marginLeft: 15,
  },
  autocompletePaper:{
    backgroundColor: fade(theme.palette.common.white, 0.15),
  
  },
  autocompleteListbox:{
    color:"#FFF",
    '&:hover &': {
      color: fade(theme.palette.common.white, 0.25),
    },
  },
  tooltip:{
    backgroundColor: 'yellow',
    //opacity:0.7,
    boxShadow: 'none',
    width:"500px"
  },
  popoverBox:{
    backgroundColor: fade(theme.palette.common.black, 1),
    color:"white"
  },
  checkBox:{
    marginTop:'5px'
  },
  listItem:{
    width:"100%",
    '&:hover ': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  root:{
    overflow: 'auto',
    height:'50vh',
    maxHeight: 350,
  }

}))

export default styles;