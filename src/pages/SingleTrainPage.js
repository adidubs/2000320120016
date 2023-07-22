import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TrainCard from '../components/TrainCard';
import LoadingSpinner from '../components/LoadingSpinner';

const SingleTrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`/api/train/${id}`) // Assuming backend API endpoint is '/api/train/:id'
      .then((response) => {
        setTrain(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      {loading ? <LoadingSpinner /> : <TrainCard train={train} />}
    </div>
  );
};

export default SingleTrainPage;