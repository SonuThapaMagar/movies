import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  // Fetch all movies
  const getMovies = async () => {
    try {
      const response = await api.get('/v1/movies'); // Fetch from backend, NOT directly from TMDB
      const data = response.data;

      console.log(data);
      setMovies(data); // Store TMDb movies in state
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch single movie data by ID
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/v1/movies/${movieId}`);
      const singleMovie = response.data;

      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
      console.log("Movie Data:", response.data); 
    } catch (err) {
      console.log(err);
    }
  };
  // Fetch movies on component mount
  useEffect(() => {
    getMovies();
    console.log("Movie Data:", movie);
  }, [movie]);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/' element={<Layout />}></Route> */}
        <Route path='/' element={<Home movies={movies} />}></Route>
        <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
        <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
      </Routes>
    </div>
  );
}

export default App;