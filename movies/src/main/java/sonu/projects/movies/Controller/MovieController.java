package sonu.projects.movies.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController// This annotation is used to create RESTful web services using Spring MVC
@RequestMapping("/api/v1/movies")// This annotation is used to map web requests onto specific handler classes and/or handler methods
public class MovieController {
    @GetMapping
    public String allMovies() {
        return "All Movies";
    }
}
