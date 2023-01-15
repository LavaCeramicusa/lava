import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { initInterceptor } from 'services/config';
import CardDetail from 'pages/detail-card';
import Login from 'pages/login';
import Landing from 'pages/landing-page';
import Cards from 'pages/cards';
import Upload from 'pages/upload';

initInterceptor({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      {/* <Route path='/search' element={<Search />} /> */}
      {/* <Route path='/cards' element={<Cards />} /> */}
      {/* <Route path='/active' element={<Active />} /> */}
      {/* <Route path='/detail-card' element={<CardDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/upload' element={<Upload />} /> */}
    </Routes>
  );
};

export default AppRouter;
