import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={AllTrainsPage} />
        <Route path="/train/:id" component={SingleTrainPage} />
      </Routes>
    </Router>
  );

}

export default App;