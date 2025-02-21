package sonu.projects.movies.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sonu.projects.movies.Models.Movie;
import sonu.projects.movies.Services.MovieService;

import java.util.List;
import java.util.Optional;

@RestController// This annotation is used to create RESTful web services using Spring MVC
@RequestMapping("/api/v1/movies")// This annotation is used to map web requests onto specific handler classes and/or handler methods
@CrossOrigin(origins = "http://localhost:5173")// This annotation is used to handle the request from a different origin
public class MovieController {

    @Autowired// This annotation is used to auto wire the bean on the setter method
    private MovieService movieService;// This annotation is used to inject the object dependency implicitly

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {

        return new ResponseEntity<List<Movie>>(movieService.getAllMovies(), HttpStatus.OK);
    }
    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>>getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<>(movieService.getSingleMovie(imdbId),HttpStatus.OK);
    }

}
