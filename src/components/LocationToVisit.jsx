import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
}));

const LocationToVisit = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard />
    </div>
  );
};

export default LocationToVisit;
