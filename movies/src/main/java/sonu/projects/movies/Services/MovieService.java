package sonu.projects.movies.Services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sonu.projects.movies.Models.Movie;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {//Constructor Injection
        this.movieRepository = movieRepository;
    }
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();// Fetching movies from DB
    }
    public Optional<Movie> getSingleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);// Fetching single movie from DB
    }

}
