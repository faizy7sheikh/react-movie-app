import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Crousel from './Crousel';
import Heading from './Heading';
import './MovieDetails.css';



const MovieDetails = () => {
    const movieId = useLocation();
    const [movie, setMovie] = useState('');

    // call api to get all details relatedto imdbid
    const id = movieId.state.movieId;
    console.log(movieId.state.movieId);
    const getMovieDetails = async () => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=38990787`;
        const response = await fetch(url,{mode:'no-cors'});
        var result = await response.json();
        console.log(result);
        setMovie(result);
    }
    useEffect(() => {

        getMovieDetails();

    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src={movie.Poster} alt='img' />
                </div>
                <div className='col-8 sidebar'>
                    <h4>{movie.Title}</h4>
                    <p>{movie.Plot}</p>
                    <div className="movie-details">
                        <div>Actors:</div>
                        <div>{movie.Actors}</div>
                    </div>
                    <div className="movie-details">
                        <div>Awards:</div>
                        <div>{movie.Awards}</div>
                    </div>
                    <div className="movie-details">
                        <div>Country:</div>
                        <div>{movie.Country}</div>
                    </div>
                    <div className="movie-details">
                        <div>Director:</div>
                        <div>{movie.Director}</div>
                    </div>
                    <div className="movie-details">
                        <div>Genre:</div>
                        <div>{movie.Genre}</div>
                    </div>
                    <div className="movie-details">
                        <div>Language:</div>
                        <div>{movie.Language}</div>
                    </div>
                    <div className="movie-details">
                        <div>Released:</div>
                        <div>{movie.Released}</div>
                    </div>
                </div>
            </div>
            {/* Movies or webseries list  scroller*/}
            <div className='mt-5'>
                <Heading heading="Movie List" />
            </div>
            <Crousel />
            {/* video player slider or video player */}
            <div className='mt-5'>
                <Heading heading="Watch Now" />
            </div>
            <div className='row mt-4'>
                <div className='col-8'>
                    <video controls={true}>
                        <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4" />
                    </video>
                </div>
                <div className='col-4'>
                        <h4>details</h4>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails

// Actors
// :
// "Mark Hamill, Harrison Ford, Carrie Fisher"
// Awards
// :
// "Won 6 Oscars. 64 wins & 29 nominations total"
// BoxOffice
// :
// "$460,998,507"
// Country
// :
// "United States"
// DVD
// :
// "06 Dec 2005"
// Director
// :
// "George Lucas"
// Genre
// :
// "Action, Adventure, Fantasy"
//
// : Language
// "English"
// Metascore
// :
// "90"
// Plot
// :
// "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ..."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "PG"
// Ratings
// :
// (3) [{…}, {…}, {…}]
// Released
// :
// "25 May 1977"
// Response
// :
// "True"
// Runtime
// :
// "121 min"
// Title
// :
// "Star Wars: Episode IV - A New Hope"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "George Lucas"
// Year
// :
// "1977"
// imdbID
// :
// "tt0076759"
// imdbRating
// :
// "8.6"
// imdbVotes
// :
// "1,364,082"