import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardContent, Typography} from '@material-ui/core'
import consts from '../../consts';
import ImageNotFound from '../../assets/notfound.png'
// import { Container } from './styles';

function Season({seasons}) {


  const classes = useStyles();
  const {API_IMAGE_URL_SMALL} = consts

  return (
    <div className={classes.root}>
      {seasons.map(({poster_path, name, air_date, episode_count}) =>{
        return (
          <Card className={classes.season}>
            <CardActionArea className={classes.cardActionArea}>
              {poster_path ? <img
                className={classes.media}
                alt='season'
                src={`${API_IMAGE_URL_SMALL}${poster_path}`}
                /> : <img
                        className={classes.media}
                        alt='season'
                        src={ImageNotFound}
                />  }
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" component="p">
                  {`${new Date(air_date).getFullYear()} | ${episode_count} episódios`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )})}
    </div>
  );
}

export default Season;