import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';

const HomeStack = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default HomeStack;
