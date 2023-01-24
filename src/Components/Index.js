import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import AddFavourite from './AddFavourite';
import MovieList from './MovieList';


const Index = () => {
    const [movie, setMovie] = useState([]);
  // const [SearchValue, setSearchValue] = useState('');

  const getMovieList = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=38990787";
    const response = await fetch(url);
    var result = await response.json();
    setMovie(result.Search);
    console.log(result.Search);
  }

  useEffect(() => {
    getMovieList();
  }, [])
    return (
        <>
            <div className='container-fluid'>
                <Heading heading={'Feature'} />
                <div className='row mx-5'>
                    <MovieList movie={movie} />
                </div>
                <Heading heading={'Trending Movie'} />
                <div className='row mx-5'>
                    <MovieList AddFavouriteComponent={AddFavourite} movie={movie} />
                </div>
            </div>
        </>
    )
}

export default Index