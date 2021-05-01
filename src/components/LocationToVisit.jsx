import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import { useWindowPosition } from '../customHooks/useWindowPosition';

const places = [
  {
    title: 'Night Beach',
    description:
      'The Night beach is a visually stunning place. Be able to view countless stars and hear the waves',
    imageUrl: process.env.PUBLIC_URL + '/assets/beach.jpg',
    time: 1500,
  },
  {
    title: 'Vaitape',
    description:
      'Vaitape is a visually stunning place. Relax on the bungalows and swim in the calm waters',
    imageUrl: process.env.PUBLIC_URL + '/assets/vaitape.jpg',
    time: 1500,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

const LocationToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="location-to-visit">
      {places.map((place) => (
        <ImageCard location={place} checked={checked} />
      ))}
    </div>
  );
};

export default LocationToVisit;
