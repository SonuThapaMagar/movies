package sonu.projects.movies.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sonu.projects.movies.Models.Movie;
import sonu.projects.movies.Services.MovieService;

import java.util.List;

@RestController// This annotation is used to create RESTful web services using Spring MVC
@RequestMapping("/api/v1/movies")// This annotation is used to map web requests onto specific handler classes and/or handler methods
public class MovieController {

    @Autowired// This annotation is used to auto wire the bean on the setter method
    private MovieService movieService;// This annotation is used to inject the object dependency implicitly
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {

        return new ResponseEntity<List<Movie>>(movieService.getAllMovies(), HttpStatus.OK);
    }
}
