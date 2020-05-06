import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import SmartWorkout from '../screens/SmartWorkout';

const HomeStack = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="smart-workout" element={<SmartWorkout />} />
    </Routes>
  );
};

export default HomeStack;
