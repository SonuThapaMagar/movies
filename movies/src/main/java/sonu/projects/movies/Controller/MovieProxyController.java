package sonu.projects.movies.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class MovieProxyController {

    @Autowired
    private RestTemplate restTemplate;

    private final String TMDB_API_KEY = "4d6c3460d85e9b3cd2519ae31755276b";
    private final String TMDB_API_URL = "https://api.themoviedb.org/3/movie";

    @GetMapping("/proxy/{imdbId}")
    public ResponseEntity<String> getMovieById(@PathVariable String imdbId) {
        String url = TMDB_API_URL + "/" + imdbId + "?api_key=" + TMDB_API_KEY;
        return restTemplate.getForEntity(url, String.class);
    }
}
