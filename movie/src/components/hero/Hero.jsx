import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/css/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // TMDb image base URL

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`); 
  }

  return (
    <div className="hero-container">
      <Carousel>
        {movies.map((movie) => {
          const posterPath = movie.poster ? movie.poster : "path/to/fallback/image.jpg";

          return (
            <Carousel.Item key={movie.imdbId ||  movie.id}>
              <div className="movie-card-container">
                <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
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
                    <div className="movie-buttons-container">
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon className='play-button-icon'
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className="movie-review-button-container">
                        <Button variant="info" onClick={()=>reviews(movie.imdbId)}>Reviews
                        </Button>
                      </div>
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
