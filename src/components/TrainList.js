import React from 'react';
import TrainCard from './TrainCard';
import { Grid } from '@material-ui/core';

const TrainList = ({ trains }) => {
  return (
    <Grid container spacing={2}>
      {trains.map((train) => (
        <Grid item xs={12} sm={6} md={4} key={train.trainNumber}>
          <TrainCard train={train} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainList;