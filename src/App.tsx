import Header from './components/Header/Header';
import Search from './components/Search/Search';
import teaBackground from '../src/images/tea-background.jpg';
import { getTeas } from '../src/api-call';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDisplay from '../src/components/MainDisplay/MainDisplay';
import FavoritesPage from './components/FavoritesPage/FavortiesPage';

function App() {

  return (
    <div
      className='bg-cover h-screen'
      style={{ backgroundImage: `url(${teaBackground})` }}>
      <div className='bg-black bg-opacity-40 flex flex-col justify-center items-center'>
        <Header />
        <Search />
        <Routes>
          <Route path='/' element={<MainDisplay />} />
          <Route path='/favorites' element={<FavoritesPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

