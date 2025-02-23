import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/css/hero.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // TMDb image base URL

const Hero = ({ movies }) => {
  console.log("Movies Data:", movies);

  return (
    <div className="hero-container">
      <Carousel>
        {movies.map((movie, index) => {
          // Use `movie.poster` directly since it already contains the full URL
          const posterPath = movie.poster ? movie.poster : "path/to/fallback/image.jpg";

          return (
            <Carousel.Item key={movie.id || index}>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img
                        src={posterPath}
                        alt={movie.title}
                        onError={(e) => {
                          e.target.onerror = null; // Prevents looping
                          e.target.src = 'path/to/fallback/image.jpg'; // Set fallback image
                        }}
                      />
                    </div>
                    <div className="movie-title">
                      <h2>{movie.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
