package sonu.projects.movies.Services;

import org.springframework.stereotype.Service;
import sonu.projects.movies.Models.Movie;

import java.util.List;

@Service
public class MovieService {
    private MovieRepository movieRepository;
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();// This method is used to get all the movies from the database
    }
}
