import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainList from '../components/TrainList';
import LoadingSpinner from '../components/LoadingSpinner';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/trains') // Assuming backend API endpoint is '/api/trains'
      .then((response) => {
        setTrains(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <LoadingSpinner /> : <TrainList trains={trains} />}
    </div>
  );
};

export default AllTrainsPage;