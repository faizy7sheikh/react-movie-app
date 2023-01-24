import React from 'react'
import './MovieList.css';
import { useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  console.log(props);
  const navigate = useNavigate();

  const handleDetails = (e, movieId) => {
    e.preventDefault();
    console.log("clicked me" + movieId);
    navigate('movie-details', { state: { movieId } });
  }

  // add to local storage 

  return (
    <>
      {
        props.movie.map((movie, index) => {
          return (
            <div className='movie-list col-2' key={index}  >
              <img src={movie.Poster} alt={'imga'} onClick={(e) => handleDetails(e, movie.imdbID)} />
              <div className='overlay d-flex align-items-center justify-content-center' onClick={(e) => {
                e.preventDefault();
                props.handleAddFavourite(movie);
                }}>
                <span>Add to favourite  <i className="fa-solid fa-heart"></i> </span>
              </div>
            </div>

          );
        })
      }
    </>
  )
}

export default MovieList