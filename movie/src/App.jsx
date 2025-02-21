import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await api.get('/movies');
      
      console.log(response.data);
      setMovies(response.data);

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

    </div>
  )
}

export default App
