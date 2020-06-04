import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    list: {
      minWidth: 200,
      backgroundColor: fade(theme.palette.common.black, 0),
     // marginTop:50,
    },
    listItem:{
      '&:hover':{
          backgroundColor: fade(theme.palette.common.white, 0.2),
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
          background:fade(theme.palette.common.black, 0.5),
          color:fade(theme.palette.common.white, 0.8)
        }
    }
  }));

  export default styles;