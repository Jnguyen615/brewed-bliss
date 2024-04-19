// App.tsx
import React, { useEffect, useState } from 'react';
import teaBackground from '../src/images/tea-background.jpg';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { getTeas } from '../src/api-call';
import { Routes, Route } from 'react-router-dom';
import MainDisplay from '../src/components/MainDisplay/MainDisplay';
import FavoritesPage from './components/FavoritesPage/FavortiesPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { TeaProps } from './types';

function App() {
  const [teas, setTeas] = useState<TeaProps[]>([]) 
  

  useEffect(() => {
    getTeas()
      .then(data => setTeas(data as TeaProps[]))
      .catch(error => console.error('Error fetching tea data:', error));
  }, []);

  return (
    <div className='bg-cover h-screen' style={{ backgroundImage: `url(${teaBackground})` }}>
      <div className='bg-black bg-opacity-40 flex flex-col justify-center items-center'>
        <Header/>
        <Search teas={teas} />
        <Routes>
          <Route path='/' element={<MainDisplay teas={teas} />} />
          <Route path='/favorites' element={<FavoritesPage/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
