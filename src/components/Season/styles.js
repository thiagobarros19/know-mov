import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
      display:'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      padding:'0 50px',
      width:"100%",
      justifyContent:'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent:'center',
        padding:'0 20px',
      },
    },
  media: {
      height: 250,
      width:'100%'
    },
  season:{
      width:'30%',
      [theme.breakpoints.down('sm')]: {
        width:'90%',
      },
      margin: '10px',
      minWidth:'200px',
      maxWidth:'300px'
  },
  cardActionArea:{
      color: fade(theme.palette.common.white, 0.5),
      backgroundColor: fade(theme.palette.common.black, 0.9),
      '&:hover ': {
          backgroundColor: fade(theme.palette.common.black, 0.9),
          color: fade(theme.palette.common.white, 1),
        },
  },
  cardContent:{
      //color: fade(theme.palette.common.white, 0.5),

  }
}))

export default styles;