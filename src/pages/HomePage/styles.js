import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  genreContainer:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 50px',
    height: 60
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
}))

export default styles;