import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';

import { Route, Routes} from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import Index from './Components/Index';
import Footer from './Components/Footer';
import WebSeries from './Components/WebSeries';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path='movie-details' element={<MovieDetails />} />
        <Route path='web-series' element={<WebSeries />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
