import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const TrainCard = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Train No: {train.trainNumber}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Departure: {train.departureTime}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Arrival: {train.arrivalTime}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Delay: {train.delay} minutes
        </Typography>
        <Typography variant="body1" gutterBottom>
          Seat Availability: {train.seatsAvailable}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Class: {train.coachClass}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fare: ${train.fare}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;