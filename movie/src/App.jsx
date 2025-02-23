import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {
  
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    try {
      
      const response = await api.get('/v1/movies'); // Fetch from backend, NOT directly from TMDB
      const data=response.data; 
      
      console.log(data);
      setMovies(data); //Store TMDb movies in state

    } catch (err) {

      console.log(err);
    }

  }

  useEffect(() => {
    getMovies();
  }
    , []);

  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route index element={<Home movies={movies}/>}></Route>
        <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
      </Routes>
    </div>
  )
}

export default App
