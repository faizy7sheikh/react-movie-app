import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';

import { Route, Routes, Outlet } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import Index from './Components/Index';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path='movie-details' element={<MovieDetails />} />
      </Routes>


    </>
  );
}

export default App;
