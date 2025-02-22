import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Paper from '@material-ui/core/Paper'
import './css/hero.css'

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {
          movies.map((movie) => {
            return (
              <Paper>
                <div className="movie-card-container">
                  <div className="movie-card">
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt={movie.title} />
                      </div>
                      <div className="movie-title">
                        <h2>{movie.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero
