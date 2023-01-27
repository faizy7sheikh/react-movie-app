import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import MovieList from './MovieList';


const Index = () => {
    const [movie, setMovie] = useState([]);
    const [favourit,setFavourite] = useState([]);
  // const [SearchValue, setSearchValue] = useState('');

  const getMovieList = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=38990787";
    const response = await fetch(url,{mode:'no-cors'});
    var result = await response.json();
    setMovie(result.Search);
    console.log(result.Search);
  }

  const handleFavourite = (movie)=>{
    const newFav = [...favourit,movie];
    setFavourite(newFav);
    console.log("I am call from parents of index"+movie);
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
                    <MovieList handleAddFavourite={handleFavourite}  movie={movie} />
                </div>
                <Heading heading={'Favourite'}/>
            </div>
        </>
    )
}

export default Index