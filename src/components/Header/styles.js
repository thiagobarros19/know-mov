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
  navbarMobile: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  navbarNone:{
    background: 'linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0))',
    transition: 'background 550ms',
  },
  leftNavbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightNavbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoNavbar: {
    width: 90,
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
  },
  searchBarMobile: {
    width:"20px"
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
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
    color: '#fff',
    width: '18ch',
    '&:focus': {
      width: '30ch',
    },
  },
  inputMobile: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    color: '#fff',
    width: '0ch',
    '&:focus': {
      width: '16ch',
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
  list:{
    cursor:'pointer',
    '& > div': {
      '& > div': {
        '& > div': {
          maxHeight:500,
          overflow: 'auto',
         // border:"1px solid #505050",
        }
      }
    },
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
  },
  boxImage:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    height:'100px'
  },
  boxDescription:{
    marginLeft: '10px',
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    textDecoration: 'none'
  },
  movieGenre: {
    fontSize: 12,
    display: 'flex',
    justifyContent: 'left',
    textAlign: 'left',
    width: '100%',
    marginTop: 2,
    color:'#C0C0C0'
  },


}))

export default styles;