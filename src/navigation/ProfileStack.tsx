import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../screens/Profile';

const ProfileStack = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};

export default ProfileStack;
