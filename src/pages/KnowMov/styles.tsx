import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  genreContainer:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: '0 50px',
    flexWrap:'wrap',
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
      alignContent: 'center',
    },
    height: "10vh",
    minHeight:120,
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      marginRight:'10px'
    },
    marginRight:'20px',
    alignSelf:'center'
  },
  buttonGroup:{
    borderRadius:"50px",
   // background: 'rgba(33,34,44,1)',
    width:"300px",
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      width:"200px",
      marginLeft:"0px"
    },
    maxWidth:"300px",
  },
  buttonGroupPopularType:{
    borderRadius:"50px",
    //background: 'rgba(33,34,44,1)',
    width:"300px",
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      width:"200px",
      marginLeft:"0px"
    },
    alignItems:"flex-start",
    maxWidth:"300px",
  },
  buttonGroupType:{
    borderRadius:"50px",
  //  background: 'rgba(33,34,44,1)',
    width:"300px",
    [theme.breakpoints.down('sm')]: {
      width:"150px",
      marginLeft:"10px"
    },
    display:'flex',
    marginLeft:"20px",
    maxWidth:"300px",
  },
  button:{ 
   // transition: 'background 750ms',
    borderRadius:"50px",
    color: 'black',
    fontSize: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    backgroundColor:"white",
    '&:hover':{
      backgroundColor:"white",
      color: 'black',
    }
  },
  buttonDisabled:{
    backgroundColor:"rgb(150,150,150,0.4)",
    color: 'white',
    borderRadius:"50px",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    '&:hover':{
      backgroundColor:"rgb(150,150,150,0.9)",
      color: 'white',
    }
  },
  buttonG:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'flex-start',
    flexWrap: 'wrap',
    alignItems:'center',
    padding: '10px 0',
    flexGrow: 1,
    maxWidth:"800px",
  }
}))

export default styles;  