import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const AUTH_TOKEN = 'qxrwbC'; // Access code for John Doe Railway Server APIs

// API endpoint to get the real-time train schedules for the next 12 hours
app.get('/trains', async (req, res) => {
  try {
    // Fetch all trains from John Doe Railway Server
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    });
    const allTrains = response.data.trains;

    // Filter trains departing in the next 12 hours and ignore trains in the next 30 minutes
    const twelveHoursFromNow = new Date(Date.now() + 12 * 60 * 60 * 1000);
    const filteredTrains = allTrains.filter((train) => {
      const departureTime = new Date(train.departureTime);
      return departureTime > twelveHoursFromNow;
    });

    // Sort the filteredTrains based on the given criteria
    const sortedTrains = filteredTrains.sort((a, b) => {
      // Sort by price in ascending order
      if (a.prices.sleeper + a.prices.AC < b.prices.sleeper + b.prices.AC) return -1;
      if (a.prices.sleeper + a.prices.AC > b.prices.sleeper + b.prices.AC) return 1;

      // Sort by seat availability in descending order
      if (a.seatsAvailable < b.seatsAvailable) return 1;
      if (a.seatsAvailable > b.seatsAvailable) return -1;

      // Sort by departure time in descending order (considering delays)
      const aDepartureTime = new Date(a.departureTime).getTime() + a.delay * 60 * 1000;
      const bDepartureTime = new Date(b.departureTime).getTime() + b.delay * 60 * 1000;
      return bDepartureTime - aDepartureTime;
    });

    res.json({ trains: sortedTrains });
  } catch (error) {
    console.error('Error fetching train data:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
