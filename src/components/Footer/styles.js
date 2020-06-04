import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  container:{
    width: '100%',
    height: 100,
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontFamily: 'Roboto, sans-serif'
  },
  instagramIcon: {
    margin: '0 10px',
    color: 'grey'
  }
}));

export default styles;